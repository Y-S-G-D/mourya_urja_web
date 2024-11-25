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

import { useAuthStore } from "@/stores/auth-store";
import { usePathname } from 'next/navigation';


export function AppSidebar({ isAdmin }: { isAdmin: boolean }) {

  const pathname = usePathname();


  const {logout} = useAuthStore()

  React.useEffect(() => {
   
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
              <span className="font-semibold text-xl">John Doe</span>
              <span className="text-sm">{isAdmin ? 'Admin' : 'Management'}</span>
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
                    <a href={item.path} onClick={() => {
                      if(item.title === 'Logout'){
                        logout()
                        return false;  // to prevent the default link behavior to navigate to the logout page
                      }
                      handleMenuClick(item.path)
                    }}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
