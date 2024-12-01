import { IUser } from "@/models/user-model";
import { userProfileById } from "@/shared/endpoints";
import apiClient from "@/lib/axiosInstance";
import { create } from "zustand";
import { errorMessage } from "@/shared/errorHandler";

interface IMyProfileStore {
    isProcessing: boolean;
    errorMsg: string | null;
    showError: boolean;
    successMsg: string | null;
    getMyProfile: (Id:string) => Promise<void>;
    userProfile: IUser | null;
}

export const useMyProfileStore = create<IMyProfileStore>((set) => ({
    isProcessing: false,
    errorMsg: null,
    successMsg: null,
    userProfile: null,
    showError: false,
    getMyProfile: async (Id) => {
        try {
            set({isProcessing:true,errorMsg:null,successMsg:null})
            console.log("user Id",Id);
            const response = await apiClient.get(`${userProfileById}/${Id}`);
            console.log("My Profile data",response.data.data);
            if(response.status === 200){
                const fetchedUser:IUser = response.data.data;
                set({isProcessing:false,successMsg:response.data.message,userProfile:fetchedUser})
                // return fetchedUser;
            }
            // return null
        } catch (e) {
            console.log(e);
            const errorMsg = errorMessage(e);
            set({isProcessing:false,errorMsg:errorMsg , showError:true});
            // return null
        }
    },
}));