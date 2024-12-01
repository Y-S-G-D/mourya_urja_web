import apiClient from '@/lib/axiosInstance';
import { ConnectionModel } from '@/models/connection-model';
import { addToFavroute, deleteFavourite, getFavourites } from '@/shared/endpoints';
import { errorMessage } from '@/shared/errorHandler';
import {create} from 'zustand';

export interface IFavouriteStore {
    favourites: ConnectionModel[];
    addToFavourite: (id: string) => Promise<void>;
    removeFromFavourite: (id: string) => Promise<void>;
    getFavourites: (tabValue:string) => Promise<void>;
    isProcessing: boolean;
    errorMsg: string | null;
    successMsg: string | null;

}

export const useFavouriteStore = create<IFavouriteStore>((set,get)=>({
    favourites: [],
    isProcessing: false,
    errorMsg: null,
    successMsg: null,
    addToFavourite: async (id: string) => {
        try{
            set({isProcessing: true, errorMsg: null, successMsg: null});
            const response = await apiClient.patch(`${addToFavroute}/${id}`);
            console.log(response.data)
            if(response.status === 200){
                set({isProcessing: false, successMsg: response.data.message});
            }
        }catch(e){
            console.log(e);
            const errMsg = errorMessage(e)
            set({isProcessing: false, errorMsg: errMsg});
        }
    },
    removeFromFavourite: async (id: string) => {
        try{
            set({isProcessing: true, errorMsg: null, successMsg: null});
            const response = await apiClient.delete(`${deleteFavourite}/${id}`);
            if(response.status === 200){
                const filteredFavourites = get().favourites.filter((favourite) => favourite._id !== id);
                set({isProcessing: false, successMsg: response.data.message, favourites: filteredFavourites});

            }
        }catch(e){
            const errMsg = errorMessage(e)
            set({isProcessing: false, errorMsg: errMsg,successMsg:null});
        }

    },
    getFavourites: async (tabValue:string) => {
        try{
            set({isProcessing: true, errorMsg: null, successMsg: null});
            const response = await apiClient.get(getFavourites,{params: {tab:tabValue}});
            set({favourites: response.data.data, isProcessing: false, successMsg: response.data.message});
            

        }catch(e){
            console.log(e);
            const errMsg = errorMessage(e)
            set({isProcessing: false, errorMsg: errMsg,successMsg:null});
        }
    }
}));
