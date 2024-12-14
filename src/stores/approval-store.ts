import apiClient from "@/lib/axiosInstance";
import { IUser } from "@/models/user-model";
import { getUsers, userApproval } from "@/shared/endpoints";
import { errorMessage } from "@/shared/errorHandler";
import { create } from "zustand";

export interface IApprovalStore {
  isProcessing: boolean;
  errMsg: string | null;
  users: IUser[];
  getPendingApprovals: () => Promise<void>;
  approveUser: (id: string) => Promise<void>;
}

export const useApprovalStore = create<IApprovalStore>((set,get) => ({
  users: [],
  errMsg: null,
  isProcessing: true,
  getPendingApprovals: async () => {
    try {
      const response = await apiClient.get(getUsers,{
        params: {
          limit:30,
          filter: JSON.stringify({ isApproved: false }),
        },
      });
        set({ users: response.data.data, isProcessing: false });
    } catch (err) {
      const errorMsg = errorMessage(err);
      set({ errMsg: errorMsg, isProcessing: false });
    }

  },
  approveUser: async (id) => {
    try {
      set({ isProcessing: true });
      const response = await apiClient.patch(`${userApproval}/${id}`,);
      if(response.status === 200){
        const updatedUsers = get().users.filter((user) => user._id !== id);
        set({ errMsg: null, isProcessing: false,users: updatedUsers });
      }
    }catch(err){
      const errorMsg = errorMessage(err);
      set({ errMsg: errorMsg, isProcessing: false });
    }
    
  },
}));
