import React from 'react';
import { Skeleton } from '@/components/ui/skeleton'; // Adjust path according to your project setup

// Skeleton Card Component
const SkeletonCard = () => {
  return (
    <div className="w-full bg-background sm:w-[350px] md:w-[400px] border rounded-lg p-4 shadow-md animate-pulse">
      <div className="flex gap-4 items-start">
        {/* Image Skeleton */}
        <Skeleton className="h-24 w-20 rounded-md" />
        <div className="w-full">
          <Skeleton className="h-5 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2 mb-1" />
          <Skeleton className="h-4 w-2/3 mb-1" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <Skeleton className="h-6 w-8" /> {/* Placeholder for heart icon */}
      </div>
    </div>
  );
};

// Dynamic Skeleton Loader Component
const FavouriteSkeletonLoader = ({ count = 4 }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default FavouriteSkeletonLoader;
