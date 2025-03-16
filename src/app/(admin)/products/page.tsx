import { Suspense } from 'react';
// import { checkPermission } from '@/lib/permissions';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ProductsList } from '@/components/modules/products/products-list';
import Search from '@/components/modules/products/search';
import ProductsListSkeleton from '@/components/skeletons/products-list';

export default async function ProductsPage() {
  //   {
  //   searchParams,
  // }: {
  //   searchParams?: {
  //     query?: string;
  //     page?: string;
  //   };
  // }
  // await checkPermission('products:view');

  // const query: string = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;

  // const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center mb-6">
            <Search placeholder="Search products..." />
          </div>

          <Suspense
            // key={query + currentPage}
            fallback={<ProductsListSkeleton />}
          >
            {/* <ProductsList currentPage={currentPage} /> */}
            <ProductsList />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
