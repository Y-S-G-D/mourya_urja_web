"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button"
import { CheckCheck } from "lucide-react"
import { FaTimes } from "react-icons/fa";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ApproveUser = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
};

export const columns: ColumnDef<ApproveUser>[] = [
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
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone No.",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const approve = row.original
 
      return (
        <div className="flex justify-around">
            <Button><CheckCheck className="font-bold"/></Button>
            <Button 
                onClick={() => {
                  console.log(approve.id)
                }}
                variant={"destructive"}>
                <FaTimes/>
            </Button>
        </div>
        
      )
    },
  },
];
