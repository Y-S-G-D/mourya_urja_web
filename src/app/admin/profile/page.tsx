'use client'

import AddEmployeeForm from '@/components/add-employee-form'
import ProfileSkeletonLoader from '@/components/skeleton-loaders/profile-form-loader'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { useEmployeeStore } from '@/stores/employee-store'
import React, { useEffect } from 'react'

const Profile = () => {
  const { getEmployeeProfile , isProcessing} = useEmployeeStore()

  useEffect(()=>{
    getEmployeeProfile()

  },[getEmployeeProfile])




  
  return (
    <div className="px-20  pt-20 flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-3xl font-semibold">Profile</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator  />
          <BreadcrumbItem>
            <BreadcrumbPage>Profile</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Separator />
      
      {isProcessing?<ProfileSkeletonLoader/>:<AddEmployeeForm/>}


    </div>
  )
}

export default Profile
