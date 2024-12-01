import apiClient from "@/lib/axiosInstance";
import { IUser } from "@/models/user-model";
import { getUsers } from "@/shared/endpoints";
import { errorMessage } from "@/shared/errorHandler";
import { create } from "zustand";

export interface IApprovalStore {
  isProcessing: boolean;
  errMsg: string | null;
  users: IUser[];
  getPendingApprovals: () => Promise<void>;
  approveUser: (id: string) => Promise<void>;
}

export const useApprovalStore = create<IApprovalStore>((set) => ({
  users: [],
  errMsg: null,
  isProcessing: false,
  getPendingApprovals: async () => {
    try {
      const response = await apiClient.get(getUsers, {
        params: {
          query:JSON.stringify({isApproved:false})
        },
      });
      console.log("resonses", response);
        set({ users: response.data.data, isProcessing: false });
    } catch (err) {
      const errorMsg = errorMessage(err);
      set({ errMsg: errorMsg, isProcessing: false });
    }

  },
  approveUser: async (id) => {
    await fetch(`/api/approvals/${id}`, {
      method: "POST",
    });
    
  },
}));
