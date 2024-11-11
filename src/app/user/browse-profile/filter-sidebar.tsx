import { Checkbox } from '@/components/ui/checkbox'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from '@/components/ui/sidebar'
import { Separator } from '@radix-ui/react-separator'
import { Filter } from 'lucide-react'
import React from 'react'

const FilterSidebar = () => {

    const filterMenus = [
        {
          title:"Employment",
          menus:[
            {
                id:"governmentsector",
                title:"Government Sector",
            },
            {
                id:"private",
                title:"Private",
            },
            {
                id:"business",
                title:"Business",
            },
            {
                id:"selfemployed",
                title:"Self Employed",
            },
            {
                id:"notemployed",
                title:"Not Employed",
            },
          ]
        }
    ]
  return (
    <Sidebar className='!bg-primary-foreground !text-card-foreground' >
      <SidebarHeader  >
          <SidebarMenu>
          <div className="flex items-center justify-start my-4">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Filter className="size-5" />
              </div>
              <div className="mx-2 flex flex-col gap-0.5 leading-none">
                <span className="font-semibold text-2xlq">Filter</span>
                {/* <span className="text-sm">Admin</span> */}
              </div>
              </div>
              
          </SidebarMenu>
      </SidebarHeader>
      <Separator/>
      <SidebarContent>
      {filterMenus.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.menus.map((menu) => (
                  <SidebarMenuItem key={menu.title}>
                    <SidebarMenuButton asChild >
                        <Checkbox />
                      {/* <a href="#">{menu.title}</a> */}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))} 
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

export default FilterSidebar
