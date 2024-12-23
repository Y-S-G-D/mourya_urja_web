import {create} from 'zustand'
import axios from 'axios';
import { loginEndPoint } from '@/shared/endpoints';
import Cookies from 'js-cookie'
import LocalStorage from '../utils/local-storage/local-storage'
import apiClient from '@/lib/axiosInstance';
import { toast } from '@/hooks/use-toast';


export interface IAuthStore{
    errorMsg: string | null;
    isLoading: boolean;
    isSuccess: boolean; 
    showError: boolean;
    showLogoutDialog: boolean;
    data:string | null;
    showPassword: boolean;
    toggleShowPassword:()=>void;
    simulateError: (isError:boolean)   => void;
    login: (email: string, password: string, accessType:string) => void;
    logout: () => void;
    isLoggedin: boolean;
    handleLogoutDialog: (isOpen:boolean) => void;
    checkLogin:()=>boolean;
    

}

export const useAuthStore = create<IAuthStore>((set,) => ({
    isLoading: false,
    errorMsg: null,
    isSuccess: false,
    showError: false,
    data:null,
    isLoggedin: false,
    showLogoutDialog: false,
    showPassword:false,
    toggleShowPassword:()=>{
        set((state)=>({showPassword:!state.showPassword}))
    },
    handleLogoutDialog:(isOpen)=>{
        set({showLogoutDialog:isOpen})
    },
    simulateError:(isError)=> {
        set({showError:isError})
    },
    
    login: async (email, password, accessType) => {
        try{
            // Add your login logic here
        console.log("accessType",accessType)
        set({ isLoading: true, errorMsg: null, isSuccess: false })
        const response = await apiClient.post(loginEndPoint,{email, password, accessType},
            
        )
        
        if(response.status === 200){

            const date = response.data.message;
            Cookies.set('access_token',response.data.data.access_token,
                {
                    path:'/',
                    expires:7 * 24 * 60 * 60 * 1000
                }
            )
            
            const role = response.data.data.role;
            Cookies.set("role",role,{
                path:'/',
                expires: 7 * 24 * 60 * 60 * 1000  // expire in 7 days
            })
            LocalStorage.getInstance().addLoginInfo(response.data.data)
            if(role === 'admin' || role === 'employee'){
                const pageAccessList = response.data.data.access
                Cookies.set("access_page",pageAccessList,{expires
                    :7 * 24 * 60 * 60 * 1000,
                })
            }
            set({ data: date, isLoading: false, isSuccess: true,isLoggedin:true })
            window.location.reload()
        }
        } catch(err: unknown){
            console.log(err)
            let msg = 'An unknown error occurred';
            if (axios.isAxiosError(err) && err.response) {
                msg = err.response.data.message;
            }
            set({showError:true, errorMsg: msg, isLoading: false,isSuccess:false})
        }
    },
    logout: () => {
        Cookies.remove("access_token")
        Cookies.remove("role")
        LocalStorage.getInstance().removeLoginInfo();
        window.location.reload();
        toast({
            title: 'Logged out successfully',
            description: 'You have been logged out successfully'
            
        })
    },

    checkLogin:()=>{
        const token = Cookies.get('access_token');
        if(token){
            set({isLoggedin:true})
            return true;
        }   
        set({isLoggedin:false})
        return false;
    }
}))