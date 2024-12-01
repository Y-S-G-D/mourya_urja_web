"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEmployeeStore } from "@/stores/employee-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteConfirmationDialog from "@/components/dialogs/delete-confirmation-dialog";
import { Dialog } from "@/components/ui/dialog";
import { useState, FC } from "react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Employees = {
  _id?: string;
  employeeId: string;
  name: string;
  designation: string;
  //   post: string;
  email: string;
  phoneNumber: string;
  status: string;
};

export const columns: ColumnDef<Employees>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "employeeId",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Employee Name",
  },
  {
    accessorKey: "designation",
    header: "Designation",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone No.",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionsCell row={row} />,
  },
];


const ActionsCell: FC<{ row: { original: Employees } }> = ({ row }) => {
  const data = row.original;
  const store = useEmployeeStore.getState();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(data.employeeId)}
        >
          Copy Employee ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a href={`/admin/add-employees/${data._id}`}>View Employee</a>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setIsDialogOpen(true)}
          className="text-destructive hover:!text-destructive hover:!bg-red-100"
        >
          Delete Employee
        </DropdownMenuItem>
      </DropdownMenuContent>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DeleteConfirmationDialog
          message={`Are you sure you want to delete ${data.name}?`}
          onNo={() => setIsDialogOpen(false)}
          onYes={() => {
            store.deleteEmployeeById(data._id ?? "")
            setIsDialogOpen(false)
            window.location.reload()
          }}
        />
      </Dialog>
    </DropdownMenu>
  );
};
