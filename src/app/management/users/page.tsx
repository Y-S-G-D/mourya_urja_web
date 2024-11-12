'use client'
import React from 'react'
import { columns } from './columns'
import { DataTable } from '@/app/admin/employees/data-table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Filter, Plus } from 'lucide-react'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { useRouter } from 'next/navigation'

import { usersData } from '@/utils/users-data'

const UsersPage = ({isAdmin}:{isAdmin:boolean}) => {
  const router = useRouter()
  return (
    <div className=" pt-20 flex flex-1 flex-col gap-4 p-4">
      <h1 className='text-3xl font-semibold'>Manage Users</h1>
      <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Manage Users</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
      <Separator/>   

      <div className='flex justify-between px-4 py-4'>
        <Input placeholder='Search here..' className='w-1/2'/>
        <Button 
          onClick={()=>{
            router.push(`${isAdmin?'/admin/add-user':'/management/add-users'}`)
          }}
          ><Plus/>Add New User</Button>
        <Button variant='secondary'>
          <Filter/>
          Filter
        </Button>

      </div>
      <div className="container mx-auto pb-10 px-4">
        <DataTable columns={columns} data={usersData} />
      </div>
    </div>

  )
}

export default UsersPage
