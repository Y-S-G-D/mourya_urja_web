'use client'
import React from 'react'
import { Employees , columns } from './columns'
import { DataTable } from './data-table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ToggleActiveInActive } from '@/components/toggle-active-inactive'
import { Search ,Plus,} from 'lucide-react'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { useRouter } from 'next/navigation'


const data : Employees[] = [
    {
        id: "E001",
        name: "John Doe",
        designation: "Software Engineer",
        // post: "Developer",
        email: "johndoe@example.com",
        phoneNumber: "123-456-7890",
        status: "Active"
      },
      {
        id: "E002",
        name: "Jane Smith",
        designation: "Project Manager",
        // post: "Manager",
        email: "janesmith@example.com",
        phoneNumber: "987-654-3210",
        status: "Active"
      },
      {
        id: "E003",
        name: "Alice Brown",
        designation: "UI/UX Designer",
        // post: "Designer",
        email: "alicebrown@example.com",
        phoneNumber: "456-789-0123",
        status: "In-Active"
      },
      {
        id: "E004",
        name: "Bob Green",
        designation: "Quality Analyst",
        // post: "QA",
        email: "bobgreen@example.com",
        phoneNumber: "789-012-3456",
        status: "Active"
      },
      {
        id: "E005",
        name: "Charlie White",
        designation: "Product Manager",
        // post: "Manager",
        email: "charliewhite@example.com",
        phoneNumber: "234-567-8901",
        status: "In-Active"
      },
      {
        id: "E006",
        name: "Daisy Black",
        designation: "Backend Developer",
        // post: "Developer",
        email: "daisyblack@example.com",
        phoneNumber: "890-123-4567",
        status: "Active"
      },
      {
        id: "E007",
        name: "Eve Adams",
        designation: "Frontend Developer",
        // post: "Developer",
        email: "eveadams@example.com",
        phoneNumber: "567-890-1234",
        status: "Active"
      },
      {
        id: "E008",
        name: "Franklin Grey",
        designation: "HR Manager",
        // post: "HR",
        email: "franklingrey@example.com",
        phoneNumber: "345-678-9012",
        status: "In-Active"
      },
      {
        id: "E009",
        name: "Grace King",
        designation: "System Administrator",
        // post: "Admin",
        email: "graceking@example.com",
        phoneNumber: "678-901-2345",
        status: "Active"
      },
      {
        id: "E010",
        name: "Henry Moore",
        designation: "Data Analyst",
        // post: "Analyst",
        email: "henrymoore@example.com",
        phoneNumber: "901-234-5678",
        status: "Active"
      },
      {
        id: "E011",
        name: "Ivy Hall",
        designation: "Machine Learning Engineer",
        // post: "Developer",
        email: "ivyhall@example.com",
        phoneNumber: "234-567-8901",
        status: "In-Active"
      },
      {
        id: "E012",
        name: "Jack Lewis",
        designation: "Network Engineer",
        // post: "Engineer",
        email: "jacklewis@example.com",
        phoneNumber: "890-123-4567",
        status: "Active"
      },
      {
        id: "E013",
        name: "Karen Young",
        designation: "DevOps Engineer",
        // post: "Engineer",
        email: "karenyoung@example.com",
        phoneNumber: "567-890-1234",
        status: "Active"
      },
      {
        id: "E014",
        name: "Liam Scott",
        designation: "Technical Support",
        // post: "Support",
        email: "liamscott@example.com",
        phoneNumber: "345-678-9012",
        status: "In-Active"
      },
      {
        id: "E015",
        name: "Mia Clark",
        designation: "Content Writer",
        // post: "Writer",
        email: "miaclark@example.com",
        phoneNumber: "678-901-2345",
        status: "Active"
      }
]
const EmployeesPage = () => {
  const router = useRouter()
  return (
    <div className=" pt-20 flex flex-1 flex-col gap-4 p-4">
      <h1 className='text-3xl font-semibold'>Manage Employees</h1>
      <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Manage Employess</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
      <Separator/>   

      <div className='flex justify-between px-4 py-4'>
        <ToggleActiveInActive/>
        <Input placeholder='Search here..' className='w-1/2'/>
        <Button 
          onClick={()=>{
            router.push('/admin/add-employees')
          }}
          ><Plus/>Add Employee</Button>

      </div>
      <div className="container mx-auto pb-10 px-4">
        <DataTable columns={columns} data={data} />
      </div>
    </div>

  )
}

export default EmployeesPage
