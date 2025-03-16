import { Suspense } from 'react';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
// import { columns } from '@/components/product-categories/columns';
// import { DataTable } from '@/components/shared/data-table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { Button } from '@/components/ui/button';
// import { getAllCategories } from '@/services/categories';
import CategoryTableSkeleton from '@/components/skeletons/categories-list';
import CategoriesList from '@/components/modules/product-categories/categories-list';

export default async function DemoPage() {
  //   {
  //   searchParams,
  // }: {
  //   searchParams?: {
  //     query?: string;
  //     page?: string;
  //   };
  // }
  // const data = await getAllCategories({
  //   page: 1,
  //   query: '',
  // });

  // const categories = await data.categories;

  // console.log('categories from page', categories);

  // const query: string = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          {/* <h1 className="text-xl font-bold mb-4">Product Categories</h1> */}
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
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Product Categories</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Category
        </Button>
      </div>

      <Card className="shadow-none rounded-sm">
        <CardHeader>
          <CardTitle>Manage Categories</CardTitle>
          <CardDescription>
            Create and organize product categories to streamline navigation and
            improve product discovery in your store.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Suspense
            // key={query + currentPage}
            fallback={<CategoryTableSkeleton />}
          >
            {/* <CategoriesList currentPage={currentPage} /> */}
            <CategoriesList />
          </Suspense>

          {/* <DataTable columns={columns} data={categories} /> */}
        </CardContent>
      </Card>
    </div>
  );
}
