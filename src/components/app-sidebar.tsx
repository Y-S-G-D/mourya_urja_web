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
import { Home, User, Users, ClipboardCheck, HelpCircle, LogOut ,FileText, Shield} from 'lucide-react';
import { Separator } from "./ui/separator"




export function AppSidebar({isAdmin}:{isAdmin:boolean}) {
  const menus = [
    {
      title:'Dashboard',
      path:'/admin',
      isActive:true,
      icon:Home
    },
    {
      title:'Profile',
      path:'/admin/profile',
      icon:User
    },
    {
      title:'Employees',
      path:'/admin/employees',
      icon:Users
    },
    {
      title:'Users',
      path:`${isAdmin?'/management/users':'/admin/users'}`,
      icon:Users
    },
    {
      title:'Approval',
      path:'/admin/approval',
      icon: ClipboardCheck
    },
    {
      title:'Enquiry',
      path:'/admin/enquiry',
      icon:HelpCircle
    },
  
    {
      title:'FAQs',
      path:'/admin/faq',
      icon:HelpCircle
    },
    {
      title:'Privacy Policy',
      path:'/privacy-policy',
      icon:Shield
    },
    {
      title:'Terms & Conditions',
      path:'/terms-conditions',
      icon:FileText
    },
    {
      title:'Logout',
      path:'/',
      icon:LogOut
    }
  ];
  
  return (
    <Sidebar >
      <SidebarHeader >
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
              
        {/* <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        /> */}
        {/* <SearchForm /> */}
      </SidebarHeader>
      <Separator/>
      <SidebarContent>
      <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menus.map((item) => (
                <SidebarMenuItem key={item.title} className="text-lg font-semibold">
                  <SidebarMenuButton asChild isActive={item.isActive}>
                    <a href={item.path}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>        
        {/* We create a SidebarGroup for each parent. */}
        {/* {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))} */}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
