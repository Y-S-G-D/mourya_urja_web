import React from 'react';
import { Skeleton } from '@/components/ui/skeleton'; // Adjust path based on your project structure

const BrowseProfileSkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {/* Card 1 */}
      <div className="p-4 bg-background border rounded-lg shadow-md animate-pulse">
        <Skeleton className="h-80 w-full rounded-md" />
        <div className="mt-4">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </div>
      </div>

      {/* Card 2 */}
      <div className="p-4 bg-background border rounded-lg shadow-md animate-pulse">
        <Skeleton className="h-80 w-full rounded-md" />
        <div className="mt-4">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </div>
      </div>

      {/* Card 3 */}
      <div className="p-4  bg-background border rounded-lg shadow-md animate-pulse">
        <Skeleton className="h-80 w-full rounded-md" />
        <div className="mt-4">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </div>
      </div>
    </div>
  );
};

export default BrowseProfileSkeletonLoader;
