import React from 'react'
import { SidebarTrigger } from './ui/sidebar'
import { Separator } from './ui/separator'

const Header = () => {
  return (
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
  )
}

export default Header
