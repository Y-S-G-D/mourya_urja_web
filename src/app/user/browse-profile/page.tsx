import React from 'react'
import FilterSidebar from './filter-sidebar'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@radix-ui/react-separator'

const BrowseProfile = () => {
  return (
    <SidebarProvider>
      <FilterSidebar />
      <SidebarInset>
        <header className=" fixed w-full bg-primary text-primary-foreground flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex items-center">
            <div className="mx-1 flex flex-col gap-0.5 leading-none">
              <span className="font-semibold">Mourya Urja Matrimonial</span>
              {/* <span className=""></span> */}
            </div>
          </div>

          
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-semibold">Browse Profile</h1>
                </div>    
            </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default BrowseProfile
