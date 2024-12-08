'use client'
import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Home, User, Users, ClipboardCheck, LogOut, FileText, Shield } from 'lucide-react';
import { Separator } from "./ui/separator"
import { Dialog , DialogTrigger } from "./ui/dialog";
import { useAuthStore } from "@/stores/auth-store";
import { usePathname } from 'next/navigation';
import LocalStorage from "@/utils/local-storage/local-storage";
import { UserLoginInfo } from "@/models/UserLoginInfo";
import { LogoutDialog } from "./dialogs/logout-dialog";



export function AppSidebar() {

  const pathname = usePathname();
  const [loginInfo, setLoginInfo] = React.useState<UserLoginInfo | null>(null)


  const {logout , handleLogoutDialog , showLogoutDialog} = useAuthStore()


  React.useEffect(() => {
    
    const loginInfo = LocalStorage.getInstance().getLoginInfo();
    setLoginInfo(loginInfo);
  }, []);

  const handleMenuClick = (path: string) => {
    console.log(path)
  };

  const menus = [
    {
      title: 'Dashboard',
      path: '/admin',
      icon: Home
    },
    {
      title: 'Profile',
      path: '/admin/profile',
      icon: User
    },
    {
      title: 'Employees',
      path: '/admin/employees',
      icon: Users
    },
    {
      title: 'Users',
      path: `/users`,
      icon: Users
    },
    {
      title: 'Approval',
      path: '/admin/approval',
      icon: ClipboardCheck
    },
    {
      title:"Forget Password",
      path:"/forget-password",
      icon:Shield,
    },
    {
      title: 'Privacy Policy',
      path: '/privacy-policy',
      icon: Shield
    },
    {
      title: 'Terms & Conditions',
      path: '/terms-conditions',
      icon: FileText
    },
    {
      title: 'Logout',
      path: '/',
      icon: LogOut
    }
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <div className="flex items-center justify-start my-4">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <User className="size-5" />
            </div>
            <div className="mx-2 flex flex-col gap-0.5 leading-none">
              <span className="font-semibold text-xl">{loginInfo?.name}</span>
              <span className="text-sm">{loginInfo?.role.toUpperCase()}</span>
            </div>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menus.map((item) => (
                <SidebarMenuItem key={item.title} className="text-lg font-semibold">
                  <SidebarMenuButton asChild isActive={item.path === pathname}>
                  {item.title === 'Logout' ? (
                    <div className="flex">
                    {React.createElement(item.icon )}

                       <Dialog
                        open={showLogoutDialog}
                        onOpenChange={() => handleLogoutDialog(false)}
                      >
                        <DialogTrigger asChild>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleLogoutDialog(true);
                            }}
                          >
                            <span>{item.title}</span>
                          </a>
                        </DialogTrigger>
                        <LogoutDialog
                          onCancel={() => handleLogoutDialog(false)}
                          onLogout={logout}
                        />
                      </Dialog>

                    </div>
                                          ) : (
                      <a
                        href={item.path}
                        onClick={() => {
                          handleMenuClick(item.path);
                        }}
                      >
                        {React.createElement(item.icon)}
                        <span>{item.title}</span>
                      </a>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
