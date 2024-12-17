import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const UserProfileSkeletonLoader = () => {
  return (
    <section className="bg-secondary max-w-7xl w-full mx-auto pt-24 md:px-8 px-4 flex flex-col justify-center items-center">
        {/* Basic Info Section */}
        <Card className="w-full flex flex-col items-center p-4  rounded-lg shadow">
          <Skeleton className="h-32 w-32 rounded-full mb-4" />
          <Skeleton className="h-6 w-48 rounded mb-2" />
          <div className="flex gap-2">
            <Skeleton className="h-4 w-24 rounded" />
            <Skeleton className="h-4 w-24 rounded" />
          </div>
          <Skeleton className="h-4 w-32 mt-4 rounded" />
        </Card>

        {/* About Me & Hobbies Section */}
        <div className="w-full my-4 flex lg:flex-row flex-col gap-4">
          <Card className="flex-1 p-4  rounded-lg shadow">
            <Skeleton className="h-6 w-32 rounded mb-4" />
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-3/4 rounded" />
          </Card>
          <Card className="flex-1 p-4  rounded-lg shadow">
            <Skeleton className="h-6 w-32 rounded mb-4" />
            <div className="flex gap-2">
              <Skeleton className="h-4 w-20 rounded" />
              <Skeleton className="h-4 w-20 rounded" />
              <Skeleton className="h-4 w-20 rounded" />
            </div>
          </Card>
        </div>

        {/* Education & Profession Section */}
        <Card className="w-full p-4  rounded-lg shadow">
          <Skeleton className="h-6 w-48 rounded mb-4" />
          <Skeleton className="h-4 w-full rounded mb-2" />
          <Skeleton className="h-4 w-3/4 rounded mb-2" />
          <Skeleton className="h-4 w-2/4 rounded" />
        </Card>

        {/* Family & Cultural/Religious Details Section */}
        <div className="w-full my-4 flex lg:flex-row flex-col gap-4">
          <Card className="flex-1 p-4  rounded-lg shadow">
            <Skeleton className="h-6 w-48 rounded mb-4" />
            <Skeleton className="h-4 w-full rounded mb-2" />
            <Skeleton className="h-4 w-3/4 rounded mb-2" />
            <Skeleton className="h-4 w-2/4 rounded" />
          </Card>
          <Card className="flex-1 p-4 rounded-lg shadow">
            <Skeleton className="h-6 w-48 rounded mb-4" />
            <Skeleton className="h-4 w-full rounded mb-2" />
            <Skeleton className="h-4 w-3/4 rounded mb-2" />
            <Skeleton className="h-4 w-2/4 rounded" />
          </Card>
        </div>

        {/* Sibling Details Section */}
        <Card className="w-full p-4  rounded-lg shadow">
          <Skeleton className="h-6 w-48 rounded mb-4" />
          <Skeleton className="h-4 w-full rounded mb-2" />
          <Skeleton className="h-4 w-3/4 rounded" />
        </Card>

        {/* Contact Information Section */}
        <Card className="w-full p-4  rounded-lg shadow">
          <Skeleton className="h-6 w-48 rounded mb-4" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-2/4 rounded" />
            <Skeleton className="h-4 w-3/4 rounded" />
            <Skeleton className="h-4 w-full rounded" />
          </div>
        </Card>

        {/* Expectations Section */}
        <CardContent className="w-full my-4 mb-8  p-4 rounded-lg shadow">
          <Skeleton className="h-6 w-48 rounded mb-4" />
          <Skeleton className="h-4 w-full rounded mb-2" />
          <Skeleton className="h-4 w-3/4 rounded" />
        </CardContent>
      </section>
  );
};

export default UserProfileSkeletonLoader;
