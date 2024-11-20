import { create } from "zustand";
import { IEmployee } from "@/models/employee-model";
import axios from "axios";
import { employeeEndPoint, employeeProfileEndPoint } from "@/shared/endpoints";
import LocalStorage from "@/utils/local-storage/local-storage";

interface IEmployeeStore {
  isProcessing: boolean;
  errorMsg: string | null;
  successMsg: string | null;
  getEmployees: () => void;
  employees: IEmployee[];
  employee: IEmployee | null;
  addEmployee: (employee: IEmployee) => void;
  updateEmployee: (employee: IEmployee) => void;
  deleteEmployee: (employeeId: string) => void;
  getEmployeeProfile: () => Promise<IEmployee | null>;
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
      // set((state) => ({ processStatus: { ...state.processStatus, isLoading: true } }));
      const response = await axios.get(employeeEndPoint);
      console.log(response.data);

      // set({ employees: response.data, processStatus: { ...processStatus, isLoading: false } });
    } catch (e) {
      console.log(e);
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
      const response = await axios.get(`${employeeProfileEndPoint}/${id}`, {
        params: { role: loginInfo.role },
        withCredentials:true
      });
      const employeeData:IEmployee = response.data.data;
      set({
        isProcessing: false,
        employee: employeeData,
        successMsg: response.data.message,
      });
      return employeeData;
    } catch (e) {
        console.log(e);
      let errorMsg = "Unknown error";
      if (axios.isAxiosError(e) && e.response) {
        errorMsg = e.response.data.message;
      } else {
        errorMsg = (e as Error).message;
      }
      set({ isProcessing: false, errorMsg: errorMsg });
      return null;
    }
  },

  addEmployee: async (employee) => {
    console.log(employee);
  },
  updateEmployee: (employee) =>
    set((state) => ({
      employees: state.employees.map((e) =>
        e.email === employee.email ? employee : e
      ),
    })),
  deleteEmployee: (employeeId) =>
    set((state) => ({
      employees: state.employees.filter((e) => e.email !== employeeId),
    })),
}));
