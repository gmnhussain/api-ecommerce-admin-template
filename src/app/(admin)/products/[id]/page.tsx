// import { checkPermission } from '@/lib/permissions';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { ProductsList } from '@/components/modules/products/products-list';

export default async function ProductsPage() {
  // await checkPermission('products:view');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <ProductsList />
    </div>
  );
}
