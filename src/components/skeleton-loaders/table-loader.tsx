import { Skeleton } from "@/components/ui/skeleton";

const TableLoader = () => {
  return (
    <div className="p-4">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-24" />
      </div>

      {/* Page Title */}
      <Skeleton className="h-8 w-40 mt-4" />

      {/* Filters */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-24" />
        </div>
        <Skeleton className="h-8 w-32" />
      </div>

      {/* Search Input */}
      <Skeleton className="h-10 w-full mt-4 rounded-md" />

      {/* Table */}
      <div className="mt-6 space-y-4">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between space-x-4"
          >
            <Skeleton className="h-6 w-12" />
            <Skeleton className="h-6 w-36" />
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-28" />
            <Skeleton className="h-6 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableLoader;
