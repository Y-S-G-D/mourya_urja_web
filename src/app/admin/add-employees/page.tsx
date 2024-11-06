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
import React from "react";

const AddEmployeePage = () => {
  return (
    <div className=" pt-20 flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-3xl font-semibold">Add New Employees</h1>
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
