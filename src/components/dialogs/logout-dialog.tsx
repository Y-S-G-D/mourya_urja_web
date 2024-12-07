import { LogOut } from "lucide-react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";



export function LogoutDialog({onCancel, onLogout}:{onCancel:()=>void, onLogout:()=>void}) {

  
  return (
       <DialogContent>
        <DialogHeader>
          <div className="flex items-center space-x-2">
            <LogOut className="h-6 w-6 text-destructive" />
            <DialogTitle>Confirm Logout</DialogTitle>
          </div>
          <DialogDescription>
            Are you sure you want to logout? You&apos;ll need to sign in again to access your account.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4">
          <Button variant="outline" 
            onClick={onCancel }>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    // </Dialog>
  );
}