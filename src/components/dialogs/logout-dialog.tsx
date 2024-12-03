import { LogOut } from "lucide-react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface LogoutDialogProps {
  onLogout: () => void;
  onCancel: () => void;
}

export function LogoutDialog({props } :{ props:LogoutDialogProps}) {

  const handleLogout = () => {
    props.onLogout();
  };

  return (
    // <Dialog open={open} onOpenChange={setOpen}>
    //   <DialogTrigger asChild>
    //     <Button variant="destructive">
    //       <LogOut className="mr-2 h-4 w-4" />
    //       Logout
    //     </Button>
    //   </DialogTrigger>
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
            onClick={props.onCancel }>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    // </Dialog>
  );
}