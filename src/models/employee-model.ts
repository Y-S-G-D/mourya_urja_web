export interface IEmployee {
    createdBy: string | null; // The id of the admin who created the employee
    employeeId: string;
    firstName: string;
    companyName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    post: string;
    designation: string;
    postingPlace: string;
    role: string; // admin | employee
    access: [string]; // edit, read, delete
    createdAt: string;
    updatedAt: string;
    isActive: boolean; // whether the employee is currently active or not
  }