import { Suspense } from 'react';
// import { checkPermission } from '@/lib/permissions';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  // CardDescription,
} from '@/components/ui/card';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

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
        <div>
          <h1 className="text-2xl font-bold mb-2">Products</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/products">Products</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Button className="cursor-pointer">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <Card className="shadow-none rounded-sm gap-0">
        <CardHeader>
          <CardTitle>Manage Products</CardTitle>
          {/* <CardDescription>
            Create and organize products to streamline navigation and improve
            product discovery in your store.
          </CardDescription> */}
        </CardHeader>
        {/* <h1 className="px-6 text-lg font-medium">Manage Products</h1> */}
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
