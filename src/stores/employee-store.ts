import { create } from "zustand";
import { IEmployee } from "@/models/employee-model";
import { allEmployeesEndpoint, employeeProfileEndPoint,registerEmployeeEndPoint } from "@/shared/endpoints";
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
  getEmployees: () => Promise<IEmployee[]>;
  employees: IEmployee[];
  employee: IEmployee | null;
  updateEmployee: (employee: IEmployee) => void;
  saveEmployee: (employee: IEmployee) => void;
  deleteEmployee: (employeeId: string) => void;
  getEmployeeProfile: () => Promise<IEmployee | null>;
  getEmployeeTableData:(employees:IEmployee[])=> Employees[]
}

// Just a minute a am guiding vinita for mobile app
export const useEmployeeStore = create<IEmployeeStore>((set) => ({
  isProcessing: false,
  errorMsg: null,
  successMsg: null,
  employees: [], // The list of employees
  employee: null,
  getEmployees: async () => {
    try {
      set({isProcessing:true,errorMsg:null,successMsg:null})
      const response = await apiClient.get(allEmployeesEndpoint);
      if(response.status === 200){
        const fetchedEmployees:IEmployee[] = response.data.data;
        set({isProcessing:false,successMsg:response.data.message,employees:fetchedEmployees})
        return fetchedEmployees;
      }
      return []
    } catch (e) {
      console.log(e);
      const errorMsg = errorMessage(e);
      set({isProcessing:false,errorMsg:errorMsg})
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
      set({isProcessing: true, errorMsg:null,})
      const response = await apiClient.post(registerEmployeeEndPoint, employee);
      if(response.status === 200){
        set({isProcessing:false, successMsg:response.data.message,})
        // Refresh the employee list
      }

    }catch(e:unknown){
      console.log(e);
      const errorMsg = errorMessage(e);
      set({isProcessing:false,errorMsg:errorMsg,successMsg:null})
    }
  },
  deleteEmployee: (employeeId) =>
    set((state) => ({
      employees: state.employees.filter((e) => e.email !== employeeId),
    })),
  getEmployeeTableData: (employees:IEmployee[]): Employees[] => {
    return employees.map((employee) => ({
      id: employee.employeeId ?? "NA",
      name: employee.firstName + ' ' + employee.lastName,
      email: employee.email,
      role: employee.role,
      designation: employee.designation ?? "NA",
      phoneNumber: employee.phoneNumber ?? "NA",
      status: employee.isActive ? "Active" : "Inactive",
    }));
  },
}));
