import apiClient from '@/lib/axiosInstance';
import { DashboardModel } from '@/models/dashboard-model';
import { dashboardInsight } from '@/shared/endpoints';
import { errorMessage } from '@/shared/errorHandler';
import {create} from 'zustand';

export interface IDashboardStore{
    dashboardData: DashboardModel | null;
    isLoading: boolean;
    errMsg: string | null;
    getDashboardData: () => Promise<DashboardModel>;
    
}

export const useDashboardStore = create<IDashboardStore>((set) => ({
    dashboardData: null,
    isLoading: false,
    errMsg: null,
    getDashboardData: async () => {
        try{
            set({isLoading: true, errMsg: null});
            const response = await apiClient.get(dashboardInsight);
            console.log(response);
            set({dashboardData: response.data.data, isLoading: false});
            return response.data.data;

        }catch(err){
            const errorMsg = errorMessage(err);
            set({errMsg: errorMsg, isLoading: false});
        }
    }
}))