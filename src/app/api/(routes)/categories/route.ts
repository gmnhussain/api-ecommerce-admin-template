import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/app/api/lib/utils';
import fs from 'fs';
import { ProductCategory } from '@/types/product';
import { getDataFilePath } from '@/app/api/lib/utils';

const dataFilePath = getDataFilePath('categories.json');

// Read categories from JSON file
function getCategories() {
  const fileData = fs.readFileSync(dataFilePath, 'utf-8');
  return JSON.parse(fileData);
}

// Write categories to JSON file
function saveCategories(categories: ProductCategory[]) {
  fs.writeFileSync(dataFilePath, JSON.stringify(categories, null, 2), 'utf-8');
}

// **GET Product Categories (with Pagination & Search)**
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const query = url.searchParams.get('query') || '';
    const limit = 10;

    let categories = getCategories();

    // Search filter
    if (query) {
      categories = categories.filter((c: ProductCategory) =>
        c.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Pagination
    const totalCategories = categories.length;
    const paginatedCategories = categories.slice(
      (page - 1) * limit,
      page * limit
    );

    return NextResponse.json(
      {
        categories: paginatedCategories,
        total: totalCategories,
        page,
        totalPages: Math.ceil(totalCategories / limit),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

// **POST: Create Product Category**
export async function POST(req: NextRequest) {
  try {
    const user = verifyToken(req);
    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name, parentId, status, description } = await req.json();
    if (!name || !status) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const categories = getCategories();
    const newCategory = {
      id: Date.now().toString(),
      name,
      parentId: parentId || null, // Null if no parent category
      status,
      description: description || '',
    };

    categories.push(newCategory);
    saveCategories(categories);

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

// **PUT: Update Product Category**
export async function PUT(req: NextRequest) {
  try {
    const user = verifyToken(req);
    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id, name, parentId, status, description } = await req.json();
    if (!id) {
      return NextResponse.json(
        { error: 'Category ID required' },
        { status: 400 }
      );
    }

    const categories = getCategories();
    const categoryIndex = categories.findIndex(
      (c: ProductCategory) => c.id === id
    );
    if (categoryIndex === -1) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }

    // Update category data
    categories[categoryIndex] = {
      ...categories[categoryIndex],
      name,
      parentId,
      status,
      description,
    };

    saveCategories(categories);
    return NextResponse.json(categories[categoryIndex], { status: 200 });
  } catch (error) {
    console.error('Error updating category:', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

// **DELETE: Remove Product Category**
export async function DELETE(req: NextRequest) {
  try {
    const user = verifyToken(req);
    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await req.json();
    if (!id) {
      return NextResponse.json(
        { error: 'Category ID required' },
        { status: 400 }
      );
    }

    const categories = getCategories();
    const newCategories = categories.filter(
      (c: ProductCategory) => c.id !== id
    );
    if (newCategories.length === categories.length) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }

    saveCategories(newCategories);
    return NextResponse.json({ message: 'Category deleted' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
