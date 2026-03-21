import React from 'react'
import SidebarHeader from './SidebarHeader'
import SidebarContent from './SidebarContent'
import SidebarFooter from './SidebarFooter'
import MobileSidebar from './MobileSidebar'

const Sidebar = () => {
  return (
    <>
      <div className='hidden md:flex p-4 flex-col h-screen gap-2'>
        <SidebarHeader />

        <div className="flex-1 overflow-y-auto p-2">
          <SidebarContent />
        </div>

        <SidebarFooter />
      </div>

      <MobileSidebar />
    </>
  )
}

export default Sidebar