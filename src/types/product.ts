export type ProductStatus = 'active' | 'draft' | 'archived';

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  stock: number;
  category: string;
  status: ProductStatus;
}

export interface ProductCategory {
  id: string;
  name: string;
  parentId: string | null;
  status: 'active' | 'inactive';
  description?: string;
}
