'use client'
import React, { useEffect } from 'react'
import { columns, Users } from './columns'
import { DataTable } from '@/app/admin/employees/data-table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Filter, Plus } from 'lucide-react'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/home-page/navbar'
import { useFetchUserStore }  from '@/stores/user-store'

const UsersPage = () => {
  const router = useRouter()

  const {getUsers, getUserTableData } = useFetchUserStore()

  const [usersTableData, setUsersTableData] = React.useState<Users[]>([])
  

  useEffect(()=>{
    getUsers().then((value)=>{
      const filteredUsers = getUserTableData(value)
      setUsersTableData(filteredUsers)
    }).catch((e)=>{
      console.log("Error is ",e)
    })
  },[getUsers,getUserTableData])

  
  return (
    <section>
      <Navbar bgColor={"bg-primary"}/>
    <div className=" pt-24 flex flex-1 flex-col gap-4 p-4 px-8">
      <h1 className='text-3xl font-semibold'>Manage Users</h1>
      <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/admin">
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
            router.push('/add-users')
          }}
          ><Plus/>Add New User</Button>
        <Button variant='secondary'>
          <Filter/>
          Filter
        </Button>

      </div>
      <div className="container mx-auto pb-10 px-4">
        <DataTable columns={columns} data={usersTableData} />
      </div>
    </div>
    </section>

  )
}

export default UsersPage
