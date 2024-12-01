import apiClient from "@/lib/axiosInstance";
import { IUser } from "@/models/user-model";
import { browseProfiles } from "@/shared/endpoints";
import { create } from "zustand";



interface IBrowseProfilesStore {
    isProcessing: boolean;
    isSuccess: boolean;
    errorMsg: string | null;
    showError: boolean;
    simulateError: (isError:boolean) => void;
    getBrowseProfiles: () => Promise<void>;
    browseProfiles: IUser[];
}

export const useBrowseProfilesStore = create<IBrowseProfilesStore>((set) => ({
    isProcessing: false,
    isSuccess: false,
    errorMsg: null,
    showError: false,
    browseProfiles: [],
    simulateError: (isError) => {
        set({ showError: isError });
    },
    getBrowseProfiles: async () => {
        try {
            set({ isProcessing: true, errorMsg: null });

            // Call API to get browse profiles
            const response = await apiClient.get(`${browseProfiles}`);
            if (response.status === 200) {
                const fetchedProfiles: IUser[] = response.data.data;
                set({ isProcessing: false, isSuccess: true, browseProfiles: fetchedProfiles });
            }
        } catch (e) {
            console.log(e);
            // const errorMsg = errorMessage(e);
            set({ isProcessing: false, errorMsg: "Error in fetching browse profiles", showError: true });
        }
    },
}));
