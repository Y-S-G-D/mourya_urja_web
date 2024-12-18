"use client";
import React, { useEffect } from "react";
import { Employees, columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { ToggleActiveInActive } from "@/components/toggle-active-inactive";
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
import TableLoader  from "@/components/skeleton-loaders/table-loader";
import { Dialog } from "@/components/ui/dialog";
import ErrorDialog from "@/components/dialogs/error-dialog";
import UserNotFound from "@/components/skeleton-loaders/user-not-found";


const EmployeesPage = () => {

  const router = useRouter();
  
  const {getEmployees,getEmployeeTableData , isProcessing, showError,simulateError, errorMsg} = useEmployeeStore()

  const [employeesTableData, setEmployeesTableData] = React.useState<Employees[]>([]);

  const timeoutRef = React.useRef<number | undefined>(undefined);


  const searchDebounce = React.useCallback((searchTerm: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      getEmployees(searchTerm)
        .then((value) => {
          const filteredUsers = getEmployeeTableData(value);
          setEmployeesTableData(filteredUsers);
        })
        .catch((e) => {
          console.log("Error is ", e);
        });
    }, 500); // 500ms debounce time
  }, [getEmployees, getEmployeeTableData]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  // const dataRef = React.useRef<Employees[]>([]);

  useEffect(()=>{
    getEmployees().then((value)=>{
      const data = getEmployeeTableData(value)
      setEmployeesTableData(data)
    })  // fetch employees data from the API or store when page loads for the first time  // call the getEmployees hook from the employee store
   
  },[getEmployees,getEmployeeTableData]);
  return (
    <div className="px-20 pt-20 flex flex-1 flex-col gap-4 p-4">
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
        {/* <ToggleActiveInActive /> */}
        <Input 
          onChange={(e) => {
            searchDebounce(e.target.value);
          }}
        placeholder="Search here.." className="w-1/2" />
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

        {isProcessing?<TableLoader/>:employeesTableData.length > 0 ?<DataTable columns={columns} data={employeesTableData} />: <UserNotFound  title={"User not found"} />}
        <Dialog open={showError} onOpenChange={simulateError}>
            <ErrorDialog
              title="Request Failed"
              message={errorMsg ?? "Something went wrong"}
              onRetry={()=>{ 
                simulateError(false)
               }}
              onCancel={()=>{ simulateError(false)}}
              retryButtonText="Try Again"
              cancelButtonText="Close"
            />
        </Dialog>
      </div>
    </div>
  );
};

export default EmployeesPage;
