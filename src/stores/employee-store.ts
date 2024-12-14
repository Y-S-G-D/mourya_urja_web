import { create } from "zustand";
import { IEmployee } from "@/models/employee-model";
import { allEmployeesEndpoint, deleteEmployee, employeeProfileEndPoint,registerEmployeeEndPoint } from "@/shared/endpoints";
import LocalStorage from "@/utils/local-storage/local-storage";
import apiClient from "@/lib/axiosInstance";
import { errorMessage } from "@/shared/errorHandler";
import { Employees } from "@/app/admin/employees/columns";

interface IEmployeeStore {
  isProcessing: boolean;
  errorMsg: string | null;
  showError: boolean;
  simulateError:(error:boolean)=>void;
  successMsg: string | null;
  isUpdateSuccess: boolean;
  getEmployees: (searchStr?:string) => Promise<IEmployee[]>;
  employees: IEmployee[];
  employee: IEmployee | null;
  updateEmployee: (employee: IEmployee) => void;
  saveEmployee: (employee: IEmployee) => void;
 
  getEmployeeProfile: () => Promise<IEmployee | null>;
  getEmployeeTableData:(employees:IEmployee[])=> Employees[]
  getEmployeeById: (employeeId: string) => Promise<void>;
  deleteEmployeeById:(employeeId: string) => void;
}

// Just a minute a am guiding vinita for mobile app
export const useEmployeeStore = create<IEmployeeStore>((set) => ({
  isProcessing: true,
  errorMsg: null,
  isUpdateSuccess: false,
  successMsg: null,
  employees: [], // The list of employees
  employee: null,
  showError: false,
  simulateError:(error:boolean)=>{
    set({showError:error})
  },
  deleteEmployeeById: async (employeeId) => {
    try {
      set({ isProcessing: true, errorMsg: null, successMsg: null });
      const response = await apiClient.delete(`${deleteEmployee}/${employeeId}`);
      
      if(response.status === 200){
        console.log("delete",response.data.message);
        
        set({isProcessing:false,successMsg:response.data.message});
      }


    }catch(e){
      console.log(e);
    }
  },
  getEmployeeById: async (employeeId): Promise<void> => {
    try {
      set({ isProcessing: true, errorMsg: null, successMsg: null });
      const response = await apiClient.get(`${employeeProfileEndPoint}/${employeeId}`);

      if(response.status === 200){
        const fetchedEmployee:IEmployee = response.data.data;
        set({isProcessing:false,successMsg:response.data.message,employee:fetchedEmployee});
      }
    }
    catch (e) {
      console.error(e);
      set({ isProcessing: false, errorMsg: errorMessage(e) ,showError:true });
    }
  },
  getEmployees: async (searchStr) => {
    try {
      if(searchStr === "" || !searchStr){
        set({isProcessing:true,errorMsg:null,successMsg:null})
      }
      
      const response = await apiClient.get(allEmployeesEndpoint,{params:{
        search: searchStr ?? "",
        limit:20
      }});
      if(response.status === 200){
        const fetchedEmployees:IEmployee[] = response.data.data;
        set({isProcessing:false,successMsg:response.data.message,employees:fetchedEmployees})
        return fetchedEmployees;
      }
      return []
    } catch (e) {
      console.log(e);
      const errorMsg = errorMessage(e);
      set({isProcessing:false,errorMsg:errorMsg , showError:true});
      return []
    }
  },

  getEmployeeProfile: async (): Promise<IEmployee | null> => {
    try {
      /// Get login info from local storage
      const loginInfo = LocalStorage.getInstance().getLoginInfo();
      if (!loginInfo) {
        throw new Error("LoginInfo does not exist");
      }
      const id = loginInfo._id;
      set({ isProcessing: true, errorMsg: null, successMsg: null });
      const response = await apiClient.get(`${employeeProfileEndPoint}/${id}`, {
        params: { role: loginInfo.role },
        withCredentials: true,
      });
      const employeeData: IEmployee = response.data.data;
      set({
        isProcessing: false,
        employee: employeeData,
        successMsg: response.data.message,
      });
      return employeeData;
    } catch (e) {
      console.log(e);
      const errorMsg = errorMessage(e);
      set({ isProcessing: false, errorMsg: errorMsg });
      return null;
    }
  },

  updateEmployee: async (employee) => {
    console.log(employee);
  },
  saveEmployee: async (employee):Promise<void> =>
  {
    try{
      set({isProcessing: true, errorMsg:null,isUpdateSuccess:false,successMsg:null})
      const response = await apiClient.post(registerEmployeeEndPoint, employee);
      if(response.status === 200){
        set({isProcessing:false, successMsg:response.data.message, isUpdateSuccess:true})
        // Refresh the employee list
      }

    }catch(e:unknown){
      console.log(e);
      const errorMsg = errorMessage(e);
      set({isProcessing:false,errorMsg:errorMsg,successMsg:null})
    }
  },
 
  getEmployeeTableData: (employees:IEmployee[]): Employees[] => {
    return employees.map((employee) => ({
      _id: employee._id ?? "NA",
      employeeId: employee.employeeId ?? "NA",
      name: employee.firstName + ' ' + employee.lastName,
      email: employee.email,
      role: employee.role,
      designation: employee.designation ?? "NA",
      phoneNumber: employee.phoneNumber ?? "NA",
      status: employee.isActive ? "Active" : "Inactive",
    }));
  },
}));

// =============================================================================== //


