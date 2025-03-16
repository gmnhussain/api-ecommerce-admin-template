// 'use client';

// import { useState, useEffect } from 'react';
// import { useSession } from 'next-auth/react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';

// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { Eye, Pencil, MoreHorizontal, Trash2 } from 'lucide-react';
// import Image from '@/components/shared/image';
// import { getStorageUrl } from '@/lib/helpers';
import { getAllCategories } from '@/services/categories';
// import { Product } from '@/types/product';
import { DataTable } from '../../shared/data-table';
import { columns } from './columns';

export default async function ProductsList() {
  //   {
  //   currentPage,
  // }: {
  //   currentPage: number;
  // }
  // const { data: session } = useSession();
  // const [products, setProducts] = useState<Product[]>([]);
  // const [isLoading, setIsLoading] = useState(true);

  const data = await getAllCategories({ page: 1, query: '' });
  const categories = data.categories;

  // console.log(currentPage);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch(`/api/products`, {
  //         headers: {
  //           Authorization: `Bearer ${session?.accessToken}`,
  //         },
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         setProducts(data);
  //       }
  //     } catch (error) {
  //       console.error('Failed to fetch products:', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   if (session?.accessToken) {
  //     fetchProducts();
  //   }
  // }, [session]);

  // For demo purposes, show sample data if API call isn't made
  // useEffect(() => {
  //   if (!session?.accessToken) {
  //     setIsLoading(false);
  //   }
  // }, [session]);

  // const filteredProducts = products.filter(
  //   (product) =>
  //     product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     product.category.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // const filteredProducts = products;

  // if (isLoading) {
  //   return <div>Loading products...</div>;
  // }

  return (
    <>
      <DataTable columns={columns} data={categories} />
    </>
  );
}

// <Table>
//   <TableHeader>
//     <TableRow>
//       <TableHead>Product</TableHead>
//       <TableHead>Category</TableHead>
//       <TableHead>Price</TableHead>
//       <TableHead>Stock</TableHead>
//       <TableHead>Status</TableHead>
//       <TableHead className="text-right">Actions</TableHead>
//     </TableRow>
//   </TableHeader>
//   <TableBody>
//     {filteredProducts.map((product: Product) => (
//       <TableRow key={product.id}>
//         <TableCell>
//           <div className="flex items-center gap-3">
//             <Image
//               src={
//                 getStorageUrl(product.image, 'image') || '/placeholder.svg'
//               }
//               alt={product.name}
//               width={40}
//               height={40}
//               className="rounded-md object-cover"
//             />
//             <span className="font-medium">{product.name}</span>
//           </div>
//         </TableCell>
//         <TableCell>{product.category}</TableCell>
//         <TableCell>${product.price.toFixed(2)}</TableCell>
//         <TableCell>
//           {product.stock === 0 ? (
//             <Badge variant="destructive">Out of stock</Badge>
//           ) : product.stock < 10 ? (
//             <Badge
//               variant="outline"
//               className="text-amber-600 border-amber-600"
//             >
//               Low stock: {product.stock}
//             </Badge>
//           ) : (
//             product.stock
//           )}
//         </TableCell>
//         <TableCell>
//           <Badge
//             variant={
//               product.status === 'active'
//                 ? 'default'
//                 : product.status === 'draft'
//                   ? 'secondary'
//                   : 'outline'
//             }
//           >
//             {product.status.charAt(0).toUpperCase() +
//               product.status.slice(1)}
//           </Badge>
//         </TableCell>
//         <TableCell className="text-right">
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="icon">
//                 <MoreHorizontal className="h-4 w-4" />
//                 <span className="sr-only">Open menu</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>Actions</DropdownMenuLabel>
//               <DropdownMenuItem>
//                 <Eye className="mr-2 h-4 w-4" />
//                 View details
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Pencil className="mr-2 h-4 w-4" />
//                 Edit product
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem className="text-destructive">
//                 <Trash2 className="mr-2 h-4 w-4" />
//                 Delete product
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </TableCell>
//       </TableRow>
//     ))}
//   </TableBody>
// </Table>
