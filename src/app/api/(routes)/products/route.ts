import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/app/api/lib/utils';
import fs from 'fs';
import { Product } from '@/types/product';
import { getDataFilePath } from '@/app/api/lib/utils';

const dataFilePath = getDataFilePath('products.json');

// Read products from JSON file
function getProducts() {
  const fileData = fs.readFileSync(dataFilePath, 'utf-8');
  return JSON.parse(fileData);
}

// Write products to JSON file
function saveProducts(products: Product) {
  fs.writeFileSync(dataFilePath, JSON.stringify(products, null, 2), 'utf-8');
}

// GET Products (with Pagination & Search)
export async function GET(req: NextRequest) {
  // console.log('My request: ', req);

  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const query = url.searchParams.get('query') || '';
    const limit = 10;

    let products = getProducts();

    // Search filter
    if (query) {
      products = products.filter((p: Product) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Pagination
    const totalProducts = products.length;
    const paginatedProducts = products.slice((page - 1) * limit, page * limit);

    // console.log('paginatedProducts: ', paginatedProducts);
    // console.log('totalProducts: ', totalProducts);
    // console.log('page: ', page);
    // console.log('totalPages: ', Math.ceil(totalProducts / limit));

    return NextResponse.json(
      {
        products: paginatedProducts,
        total: totalProducts,
        page,
        totalPages: Math.ceil(totalProducts / limit),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = verifyToken(req);
    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name, price, stock, category, image, status } = await req.json();
    if (!name || !price || !stock || !category || !status) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const products = getProducts();
    const newProduct = {
      id: Date.now().toString(),
      name,
      price,
      stock,
      category,
      image: image || '/placeholder.svg',
      status,
    };

    products.push(newProduct);
    saveProducts(products);

    return NextResponse.json(newProduct, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const user = verifyToken(req);
    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id, name, price, stock, category, image, status } =
      await req.json();
    if (!id) {
      return NextResponse.json(
        { error: 'Product ID required' },
        { status: 400 }
      );
    }

    const products = getProducts();
    const productIndex = products.findIndex((p: Product) => p.id === id);
    if (productIndex === -1) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Update product data
    products[productIndex] = {
      ...products[productIndex],
      name,
      price,
      stock,
      category,
      image,
      status,
    };

    saveProducts(products);
    return NextResponse.json(products[productIndex], { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const user = verifyToken(req);
    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await req.json();
    if (!id) {
      return NextResponse.json(
        { error: 'Product ID required' },
        { status: 400 }
      );
    }

    const products = getProducts();
    const newProducts = products.filter((p: Product) => p.id !== id);
    if (newProducts.length === products.length) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    saveProducts(newProducts);
    return NextResponse.json({ message: 'Product deleted' }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
