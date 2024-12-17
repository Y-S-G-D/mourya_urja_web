"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useFetchUserStore } from "@/stores/user-store";
import { useState ,FC} from "react";
import { Dialog } from "@/components/ui/dialog";
import DeleteConfirmationDialog from "@/components/dialogs/delete-confirmation-dialog";


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Users = {
  id: string;
  name: string;
  dob: string;
  email: string;
  phoneNumber: string;
  jobType: string;
  docId:string;
};

export const columns: ColumnDef<Users>[] = [
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
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "User Name",
  },
  {
    accessorKey: "dob",
    header: "Date of Birth",
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
    accessorKey: "jobType",
    header: "Job Type",
  },
  {
    id: "actions",
    cell: ({ row }) => {
     
      return <ActionsCell row={row} />;
    },
  },
];

const ActionsCell: FC<{ row: { original: Users } }> = ({ row }) => {
  const user = row.original;
  const store = useFetchUserStore.getState();
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
          onClick={() => navigator.clipboard.writeText(user.id)}
        >
          Copy Employee ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
        <a href={`/add-users/${user.email}`}>View User</a>
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
          message={`Are you sure you want to delete ${user.name}?`}
          onNo={() => setIsDialogOpen(false)}
          onYes={() => {
            store.deleteUserByEmail(user.email)
            setIsDialogOpen(false)
            window.location.reload()
          }}
        />
      </Dialog>
    </DropdownMenu>
  );
};

