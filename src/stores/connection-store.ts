import apiClient from "@/lib/axiosInstance";
import { ConnectionModel } from "@/models/connection-model";
import { getConnections } from "@/shared/endpoints";
import { errorMessage } from '@/shared/errorHandler';
import { create } from "zustand";

interface IConnectionStore {
  connections: ConnectionModel[];
  getConnections: () => Promise<void>;
  isProcessing: boolean;
  errorMsg: string | null;
  successMsg: string | null;
}

export const useConnectionStore = create<IConnectionStore>((set) => ({
  connections: [],
  isProcessing: false,
  errorMsg: null,
  successMsg: null,
  getConnections: async () => {
    try {
      set({ isProcessing: true, errorMsg: null, successMsg: null });
      const response =  await apiClient.get(getConnections);
      if( response.status === 200){
         const fetchedConnections: ConnectionModel[] = response.data.connections;
        set({ connections: fetchedConnections, isProcessing: false, successMsg: response.data.message });
      }
      // const response = await apiClient.get(getFavourites, { params: { tab: tabValue } });
      // set({ favourites: response.data.data, isProcessing: false, successMsg: response.data.message });
    } catch (e) {
        console.log(e);
      const errMsg = errorMessage(e);
      set({ isProcessing: false, errorMsg: errMsg });
    }
  },
}));

