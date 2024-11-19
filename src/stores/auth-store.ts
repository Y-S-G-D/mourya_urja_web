import {create} from 'zustand'
import axios from 'axios';
import { loginEndPoint } from '@/shared/endpoints';


export interface IAuthStore{
    errorMsg: string | null;
    isLoading: boolean;
    isSuccess: boolean; 
    data:string | null;
    login: (email: string, password: string, accessType:string) => void;
    logout: () => void;

}

export const useAuthStore = create<IAuthStore>((set,) => ({
    isLoading: false,
    errorMsg: null,
    isSuccess: false,
    data:null,
    
    login: async (email, password, accessType) => {
        try{
            // Add your login logic here
        set({ isLoading: true, errorMsg: null, isSuccess: false })
        const response = await axios.post(loginEndPoint,{email, password, accessType})
        if(response.status === 200){
            const date = response.data as string | null;
            set({ data: date, isLoading: false, isSuccess: true })
        }
        }catch(err: unknown){
            console.log(err)
            let msg = 'An unknown error occurred';
            if (axios.isAxiosError(err) && err.response) {
                msg = err.response.data.message;
            }
            set({ errorMsg: msg, isLoading: false,isSuccess:false})
        }
    },
    logout: () => {
        // Implementation here
    }
}))