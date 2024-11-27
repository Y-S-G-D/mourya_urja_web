"use client";
import React, { useEffect } from "react";
import { Employees, columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleActiveInActive } from "@/components/toggle-active-inactive";
import { Plus } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useEmployeeStore } from "@/stores/employee-store";


const EmployeesPage = () => {

  const router = useRouter();
  
  const {employees,getEmployees,getEmployeeTableData} = useEmployeeStore()
  
  const dataRef = React.useRef<Employees[]>([]);

  useEffect(()=>{
    getEmployees().then((value)=>{
      dataRef.current = getEmployeeTableData(value)
    })  // fetch employees data from the API or store when page loads for the first time  // call the getEmployees hook from the employee store
   
  },[employees,getEmployees,getEmployeeTableData]);
  return (
    <div className=" pt-20 flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-3xl font-semibold">Manage Employees</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Manage Employess</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Separator />

      <div className="flex justify-between px-4 py-4">
        <ToggleActiveInActive />
        <Input placeholder="Search here.." className="w-1/2" />
        <Button
          onClick={() => {
            router.push("/admin/add-employees");
          }}
        >
          <Plus />
          Add Employee
        </Button>
      </div>
      <div className="container mx-auto pb-10 px-4">
        <DataTable columns={columns} data={dataRef.current} />
      </div>
    </div>
  );
};

export default EmployeesPage;
