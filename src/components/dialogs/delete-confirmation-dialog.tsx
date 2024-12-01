import React from "react";
import { DialogContent, DialogHeader, DialogTitle, DialogFooter,DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

interface DeleteDialogProps {
  title?: string;
  message: string;
  onYes?: () => void;
  onNo?: () => void;
  
}

const DeleteConfirmationDialog: React.FC<DeleteDialogProps> = ({
  title = "Delete Confirmation",
  message,
  onYes: onYes,
  onNo: onNo,
  
}) => {
  return (
    <DialogContent className="sm:max-w-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <DialogHeader className="text-center flex flex-col items-center">
          <div className="relative h-20 w-20 rounded-full bg-red-100 items-center flex justify-center mb-4">
            <AlertCircle size={48} className="text-red-600" />
            <div className="absolute -z-10 h-10 w-10 rounded-full bg-red-200 animate-ripple" />
          </div>
          <DialogTitle className="text-2xl font-bold text-red-600">
            {title}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription></DialogDescription>
        <div className="text-center my-6">
          <p className="text-base text-gray-600">{message}</p>
        </div>


        <DialogFooter className="flex flex-row gap-3 sm:gap-4">
         
            <Button
              variant="default"
              className="bg-red-600 hover:bg-red-700"
              onClick={onYes}
            >
              Yes
            </Button>
        
          <Button
            variant="outline"
            onClick={onNo}
          >
            No
          </Button>
        </DialogFooter>
      </motion.div>
    </DialogContent>
  );
};

export default DeleteConfirmationDialog;