import AddEmployeeForm from '@/components/add-employee-form'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const Profile = () => {
  return (
    <div className=" pt-20 flex flex-1 flex-col gap-4 p-4">
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
      <AddEmployeeForm/>


    </div>
  )
}

export default Profile
