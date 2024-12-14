"use client";
import React, { useCallback } from "react";
import { DataTable } from "@/app/admin/employees/data-table";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { columns } from "./columns";
import { useApprovalStore } from "@/stores/approval-store";
import { useFetchUserStore } from "@/stores/user-store";
import TableLoader from "@/components/skeleton-loaders/table-loader";
import UserNotFound from "@/components/skeleton-loaders/user-not-found";

const ApprovalPage: React.FC = () => {
  const { getPendingApprovals, users, isProcessing } = useApprovalStore();
  const { getUserTableData } = useFetchUserStore();

  const fetchApprovalData = useCallback(async () => {
    getPendingApprovals();
  }, [getPendingApprovals]);

  React.useEffect(() => {
    fetchApprovalData();
  }, [fetchApprovalData]);

  // if(isProcessing ){
  //   return <h1 className='text-3xl font-semibold'>Loading...</h1>
  // }

  // if(users.length === 0){
  //   return <h1 className=' pt-24 flex flex-1 flex-col justify-center items-center text-center gap-4 p-4 px-8 text-3xl font-semibold'>No pending approvals</h1>
  // }

  return (
    <div className=" pt-24 flex flex-1 flex-col gap-4 p-4 px-8">
      <h1 className="text-3xl font-semibold">Approval</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Approval</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Separator />

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
        {isProcessing ? (
          <TableLoader />
        ) : users.length > 0 ? (
          <DataTable columns={columns} data={getUserTableData(users)} />
        ) : (
          <UserNotFound title={"User not available"} desc="You currently have no pending approvals."/>
          // <h1 className="pt-40">
          //   No pending approvals
          // </h1>
        )}
      </div>
    </div>
  );
};

export default ApprovalPage;
