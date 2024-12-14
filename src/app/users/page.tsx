"use client";
import React, { useEffect } from "react";
import { columns, Users } from "./columns";
import { DataTable } from "@/app/admin/employees/data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Plus } from "lucide-react";
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
import Navbar from "@/components/home-page/navbar";
import { useFetchUserStore } from "@/stores/user-store";
import TableLoader from "@/components/skeleton-loaders/table-loader";
import { Dialog } from "@/components/ui/dialog";
import ErrorDialog from "@/components/dialogs/error-dialog";

const UsersPage = () => {
  const router = useRouter();

  const {
    getUsers,
    getUserTableData,
    isProcessing,
    showError,
    simulateError,
    errorMsg,
  } = useFetchUserStore();

  const [usersTableData, setUsersTableData] = React.useState<Users[]>([]);

  /// add debounce for search

  const timeoutRef = React.useRef<number | undefined>(undefined);

  const searchDebounce = React.useCallback((searchTerm: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      getUsers(searchTerm)
        .then((value) => {
          const filteredUsers = getUserTableData(value);
          setUsersTableData(filteredUsers);
        })
        .catch((e) => {
          console.log("Error is ", e);
        });
    }, 500); // 500ms debounce time
  }, [getUsers, getUserTableData]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const fetchUsers = React.useCallback(async () => {
    getUsers("")
      .then((value) => {
        const filteredUsers = getUserTableData(value);
        setUsersTableData(filteredUsers);
      })
      .catch((e) => {
        console.log("Error is ", e);
      });
  }, [getUsers, getUserTableData]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);


  return (
    <section>
      <Navbar bgColor={"bg-primary"} />
      <div className=" pt-24 flex flex-1 flex-col gap-4 p-4 px-20">
        <h1 className="text-3xl font-semibold">Manage Users</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Manage Users</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Separator />

        <div className="flex justify-between px-4 py-4">
          <Input 
            onChange={(e) => {
              searchDebounce(e.target.value);
            }}
          placeholder="Search here.." className="w-1/2" />
          <Button
            onClick={() => {
              router.push("/add-users");
            }}
          >
            <Plus />
            Add New User
          </Button>
          <Button variant="secondary">
            <Filter />
            Filter
          </Button>
        </div>
        <div className="container mx-auto pb-10 px-4">
          {/* {isProcessing && <TableLoader />} */}
          {isProcessing ? <TableLoader /> : usersTableData.length > 0 ? (
            <DataTable columns={columns} data={usersTableData} />
          ) : (
            <h1 className="text-center text-lg text-primary mt-40">
              {
                `No users found :(`
              }
            </h1>
          )}
          <Dialog open={showError} onOpenChange={simulateError}>
            <ErrorDialog
              title="Request Failed"
              message={errorMsg}
              onRetry={() => {
                simulateError(false);
                fetchUsers();
              }}
              onCancel={() => {
                simulateError(false);
              }}
              retryButtonText="Try Again"
              cancelButtonText="Close"
            />
          </Dialog >
        </div>
      </div>
    </section>
  );
};

export default UsersPage;
