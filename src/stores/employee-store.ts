import { create} from "zustand"
import { IEmployee } from "@/models/employee-model"
import axios from "axios";
import { employeeEndPoint } from "@/shared/endpoints";

interface IEmployeeStore {
    getEmployees: () => void;
    employees: IEmployee[];
    addEmployee: (employee: IEmployee) => void;
    updateEmployee: (employee: IEmployee) => void;
    deleteEmployee: (employeeId: string) => void;
}

// Just a minute a am guiding vinita for mobile app 
export const useEmployeeStore = create<IEmployeeStore>((set) => ({
    employees: [],
    processStatus: {
        isLoading: false,
        errorMsg: null,
        isSuccess: false,
        successMsg: null
    },
    getEmployees: async () => {
        try{
            // set((state) => ({ processStatus: { ...state.processStatus, isLoading: true } }));
            const response = await axios.get(employeeEndPoint);
            console.log(response.data)

            // set({ employees: response.data, processStatus: { ...processStatus, isLoading: false } });

        }
        catch(e){
            console.log(e)
        }
    },
    addEmployee: async (employee) => {
        console.log(employee)

    },
    updateEmployee: (employee) => set((state) => ({
        employees: state.employees.map((e) => (e.email === employee.email ? employee : e))
    })),
    deleteEmployee: (employeeId) => set((state) => ({ employees: state.employees.filter((e) => e.email !== employeeId) }))

}))