import { Skeleton } from '@/components/ui/skeleton';

export default function CategoryTableSkeleton() {
  return (
    <>
      {/* Search and Filters Skeleton */}
      <div className="flex items-center justify-between py-4 space-x-2">
        <Skeleton className="h-10 w-64 rounded-sm" />
        <Skeleton className="h-10 w-24 rounded-sm" />
      </div>

      {/* Table Skeleton */}
      <div className="rounded-sm border">
        <table className="w-full border-collapse">
          {/* Table Header Skeleton */}
          <thead>
            <tr>
              {Array.from({ length: 5 }).map((_, i) => (
                <th key={i} className="p-2">
                  <Skeleton className="h-5 w-24" />
                </th>
              ))}
            </tr>
          </thead>
          {/* Table Body Skeleton */}
          <tbody>
            {Array.from({ length: 5 }).map((_, rowIdx) => (
              <tr key={rowIdx} className="border-t">
                {Array.from({ length: 5 }).map((_, cellIdx) => (
                  <td key={cellIdx} className="p-2">
                    <Skeleton className="h-5 w-full" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Skeleton */}
      <div className="py-4 flex items-center justify-end space-x-2">
        <Skeleton className="h-8 w-24 rounded-sm" />
        <Skeleton className="h-8 w-24 rounded-sm" />
      </div>
    </>
  );
}
