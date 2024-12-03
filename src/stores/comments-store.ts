import { IComment } from "@/models/comment-model";
import { create } from "zustand";
import apiClient from "@/lib/axiosInstance";
import { addComment, getComments } from "@/shared/endpoints";
import { errorMessage } from '@/shared/errorHandler';


interface ICommentStore {
    comments: IComment[];
    getComments: (connectionUserId:string) => Promise<void>;
    addComment: (comment: IComment) => Promise<void>;
    isProcessing: boolean;
    errorMsg: string | null;
    successMsg: string | null;
}

export const useCommentStore = create<ICommentStore>((set,get) => ({
    comments: [],
    isProcessing: false,
    errorMsg: null,
    successMsg: null,
    getComments: async (connectionUserId) => {
        try{
            set({ isProcessing: true, errorMsg: null, successMsg: null });
            console.log("connectionUserId", connectionUserId);
            const response = await apiClient.get(getComments,{params:{connectionUserId}});
            console.log("get comments", response.data);
            if (response.status === 200) {
                set({ isProcessing: false, comments: response.data.comments, successMsg: response.data.message });
            }
        }
        catch(e){
            console.log(e);
            const errMsg = errorMessage(e);
            set({ isProcessing: false, errorMsg: errMsg,successMsg: null });
        }
    },
    addComment: async (comment: IComment) => {
        try {
            set({ isProcessing: true, errorMsg: null, successMsg: null });
            console.log("comment", comment);
            const response = await apiClient.post(addComment, comment);
            
            if (response.status === 201) {
                console.log("response", response.data);
                const newComments = [...get().comments, comment ];
                console.log("newComments", newComments);
                set({isProcessing: false, successMsg: response.data.message  , comments: newComments });
            }
        } catch (e) {
            console.log(e);
            const errMsg = errorMessage(e);
            set({ isProcessing: false, errorMsg: errMsg });
        }
    },
}));



