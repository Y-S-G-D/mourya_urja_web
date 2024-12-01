'use client';
import AddEmployeeForm from "@/components/add-employee-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@radix-ui/react-separator";
import React ,{useCallback , useEffect} from "react";
import { useEmployeeStore } from "@/stores/employee-store";
 
interface Params {
    id: string;
}

const AddEmployeePage = ({params}:{params:Promise<Params>}) => {

  const {getEmployeeById,employee} = useEmployeeStore();

  const fetchEmployee =  useCallback(async () => {
    const { id } = await params; 
    if(!id) return;
    await  getEmployeeById(id);

   
  },[getEmployeeById,params]);

  useEffect(() => {
    fetchEmployee();
  }, [fetchEmployee]);


  return (
    <div className=" pt-20 flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-3xl font-semibold">{`Employee: ${employee?.firstName||""} ${employee?.lastName||""}`}</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Manage Employees</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />

          <BreadcrumbItem>
            <BreadcrumbPage>Add Employees</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Separator />
      <AddEmployeeForm/>


    </div>
  );
};

export default AddEmployeePage;
