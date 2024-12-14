import React from 'react'
import { Card, CardHeader, CardContent} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const DashboardSkeleton = () => {
  return (
    <div className="p-8  py-24 max-w-[1400px] mx-auto space-y-8">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Employees Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <Skeleton className="h-5 w-[120px]" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-10 w-[60px] mb-2" />
            <Skeleton className="h-4 w-[100px]" />
          </CardContent>
        </Card>

        {/* Total Users Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-10 w-[60px] mb-2" />
            <Skeleton className="h-4 w-[100px]" />
          </CardContent>
        </Card>

        {/* Pending Approval Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <Skeleton className="h-5 w-[130px]" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-10 w-[60px] mb-2" />
            <Skeleton className="h-4 w-[100px]" />
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Gender Ratio Chart */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <Skeleton className="h-5 w-[100px]" />
              <Skeleton className="h-4 w-[80px]" />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Skeleton className="h-[300px] w-[300px] rounded-full mb-4" />
            <div className="w-full flex justify-between items-center">
              <Skeleton className="h-4 w-[120px]" />
              <Skeleton className="h-4 w-[180px]" />
            </div>
          </CardContent>
        </Card>

        {/* Age Distribution Chart */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <Skeleton className="h-5 w-[150px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-end justify-center gap-4">
              <Skeleton className="w-[120px] h-full" />
              <Skeleton className="w-[120px] h-[80%]" />
              <Skeleton className="w-[120px] h-[60%]" />
              <Skeleton className="w-[120px] h-[40%]" />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <Skeleton className="h-4 w-[120px]" />
              <Skeleton className="h-4 w-[180px]" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardSkeleton
