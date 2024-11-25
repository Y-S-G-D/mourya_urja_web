'use client'
import React from 'react'
import { DataTable } from '@/app/admin/employees/data-table'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { usersData } from '@/utils/users-data'
import { columns } from './columns'

const ApprovalPage: React.FC = () => {
  return (
    <div className=" pt-24 flex flex-1 flex-col gap-4 p-4 px-8">
      <h1 className='text-3xl font-semibold'>Approval</h1>
      <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Approval</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
      <Separator/>   

      {/* <div className='flex justify-between px-4 py-4'>
        <Input placeholder='Search here..' className='w-1/2'/>
        <Button 
          onClick={()=>{
            router.push('/add-users')
          }}
          ><Plus/>Add New User</Button>
        <Button variant='secondary'>
          <Filter/>
          Filter
        </Button>
      </div> */}
      <div className="container mx-auto pb-10 px-4">
        <DataTable columns={columns} data={usersData} />
      </div>
    </div>
  )
}

export default ApprovalPage
