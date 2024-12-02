import apiClient from "@/lib/axiosInstance";
import { totalUsersCount } from "@/shared/endpoints";
import { errorMessage } from "@/shared/errorHandler";
import { create } from "zustand";

interface IPaginationStore {
  totalPages: number;
  totalUsers: number;
  currentPage: number;
  usersPerPage: number;
  isProcessing: boolean;
  isSuccess: boolean;
  errorMsg: string | null;
  getTotalPages: ({ limit }: { limit: number }) => Promise<void>;
  setCurrentPage: (page: number) => void;
}

export const usePaginationStore = create<IPaginationStore>((set) => ({
  totalPages: 0,
  totalUsers: 0,
  currentPage: 1,
  usersPerPage: 20,
  isProcessing: false,
  isSuccess: false,
  errorMsg: null,
  getTotalPages: async ({ limit }: { limit: number }) => {
    try {
      set({ isProcessing: true, errorMsg: null, usersPerPage: limit });

      // Call API to get total users
      const response = await apiClient.get(totalUsersCount, {
        params: { limit },
      });
      if (response.status === 200) {
        set({
          isProcessing: false,
          isSuccess: true,
          totalUsers: response.data.data.count ?? 0,
          totalPages: response.data.data.totalPages ?? 0,
        });
      }
    } catch (e) {
      console.log(e);
      const errorMsg = errorMessage(e);
      set({ isProcessing: false, errorMsg: errorMsg, isSuccess: false });
    }
  },
  setCurrentPage: (page: number) => {
    set({ currentPage: page });
  }
}));
