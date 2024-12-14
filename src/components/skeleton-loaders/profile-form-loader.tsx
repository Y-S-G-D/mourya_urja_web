import { Skeleton } from "@/components/ui/skeleton"

function ProfileSkeletonLoader() {

  return (
    <div className="p-6 max-w-7xl w-full mx-auto">
      <div className="grid grid-cols-2 gap-4">
        {/* Employee ID */}
        <div>
          <Skeleton className="h-5 w-32 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        {/* Company Name */}
        <div>
          <Skeleton className="h-5 w-40 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>

        {/* First Name */}
        <div>
          <Skeleton className="h-5 w-28 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        {/* Last Name */}
        <div>
          <Skeleton className="h-5 w-28 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>

        {/* Email */}
        <div>
          <Skeleton className="h-5 w-24 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        {/* Phone Number */}
        <div>
          <Skeleton className="h-5 w-32 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>

        {/* Post */}
        <div>
          <Skeleton className="h-5 w-20 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        {/* Designation */}
        <div>
          <Skeleton className="h-5 w-40 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>

        {/* Posting Place */}
        <div>
          <Skeleton className="h-5 w-36 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>

      {/* Page Access */}
      <div className="mt-6">
        <Skeleton className="h-5 w-32 mb-4" />
        <div className="flex flex-wrap gap-4">
          {[...Array(7)].map((_, index) => (
            <Skeleton key={index} className="h-8 w-24" />
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  );
}

export default ProfileSkeletonLoader;
