import apiClient from "@/lib/axiosInstance";
import { IUser } from "@/models/user-model";
import { browseProfiles } from "@/shared/endpoints";
import { create } from "zustand";

interface IBrowseProfilesStore {
  isProcessing: boolean;
  isSuccess: boolean;
  errorMsg: string | null;
  showError: boolean;
  simulateError: (isError: boolean) => void;
  getBrowseProfiles: ({
    page,
    limit,
  }: {
    page: number;
    limit: number;
    searchStr: string;
  }) => Promise<void>;
  browseProfiles: IUser[];
}

export const useBrowseProfilesStore = create<IBrowseProfilesStore>((set) => ({
  isProcessing: true,
  isSuccess: false,
  errorMsg: null,
  showError: false,
  browseProfiles: [],
  simulateError: (isError) => {
    set({ showError: isError });
  },
  getBrowseProfiles: async ({
    page,
    limit,
    searchStr,
  }: {
    page: number;
    limit: number;
    searchStr: string;
  }) => {
    try {
      if (searchStr.length === 0) {
        set({ isProcessing: true, errorMsg: null });
      }

      // Call API to get browse profiles
      const response = await apiClient.get(`${browseProfiles}`, {
        params: { page, limit, skip: (page - 1) * limit, search: searchStr },
      });
      if (response.status === 200) {
        const fetchedProfiles: IUser[] = response.data.data;
        set({
          isProcessing: false,
          isSuccess: true,
          browseProfiles: fetchedProfiles,
        });
      }
    } catch (e) {
      console.log(e);
      // const errorMsg = errorMessage(e);
      set({
        isProcessing: false,
        errorMsg: "Error in fetching browse profiles",
        showError: true,
      });
    }
  },
}));
