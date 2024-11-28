import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

interface TableLoaderProps {
  rows?: number;
}

const TableLoader: React.FC<TableLoaderProps> = ({ rows = 5 }) => {
  return (
    <div className="w-full border rounded-lg overflow-hidden">
      {/* Table Header */}
      <div className="border-b bg-gray-50/40">
        <div className="grid grid-cols-6 gap-4 p-4">
          <Skeleton className="h-4 w-8" /> {/* ID */}
          <Skeleton className="h-4 w-40" /> {/* User Name */}
          <Skeleton className="h-4 w-32" /> {/* Date of Birth */}
          <Skeleton className="h-4 w-32" /> {/* Email */}
          <Skeleton className="h-4 w-24" /> {/* Phone No. */}
          <Skeleton className="h-4 w-24" /> {/* Job Type */}
        </div>
      </div>

      {/* Table Rows */}
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="border-b last:border-0 hover:bg-gray-50/50 transition-colors"
        >
          <div className="grid grid-cols-6 gap-4 p-4">
            <Skeleton className="h-4 w-6" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-28" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableLoader;