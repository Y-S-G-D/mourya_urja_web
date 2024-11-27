import React from "react";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";

type SuccessDialogProps = {
  message: string;
};

const SuccessDialog: React.FC<SuccessDialogProps> = ({ message }) => {
  return (
    <DialogContent>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-2xl w-full h-72 justify-center flex  flex-col items-center"
      >
        <DialogHeader className="text-center flex flex-col items-center ">
           <div className="relative h-20 w-20 rounded-full bg-secondary items-center flex justify-center">
            <CheckCheck size={48} className="text-primary" />
            <div className="absolute -z-10 h-10 w-10 rounded-full bg-sidebar-primary  animate-ripple"/>
           </div>
          <DialogTitle className="pt-4 text-4xl text-primary">
            Successful
          </DialogTitle>
        </DialogHeader>
        <div className="text-center">
          <p className="text-base text-gray-700">{message}</p>
        </div>
      </motion.div>
    </DialogContent>
  );
};

export default SuccessDialog;
