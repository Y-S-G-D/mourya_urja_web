export interface RestrictedPathModel {
  title: string;
  path: string;
}

export const restrictedPaths: RestrictedPathModel[] = [
  {
    title: "Dashboard",
    path: "/admin",
  },
  {
    title: "Profile",
    path: "/admin/profile",
  },
  {
    title: "Employees",
    path: "/admin/employees",
  },
  {
    title: "Users",
    path: "/users",
  },
  {
    title: "Approval",
    path: "/admin/approval",
  },
  {
    title: "Add Employee",
    path: "/admin/add-employees"
  },
  {
    title: "Edit Employee",
    path: "/admin/add-employees/[id]"
  },
  {
    title: "Edit User",
    path: "/add-users/[email]"
  }
];
