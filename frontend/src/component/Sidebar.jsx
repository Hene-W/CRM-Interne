import React from 'react'
import SidebarHeader from './Sidebar/SidebarHeader'
import SidebarContent from './Sidebar/SidebarContent'

const Sidebar = () => {
  return (
    <div className='p-4 flex flex-col gap-2'>
      <SidebarHeader />
      <SidebarContent />
    </div>
  )
}

export default Sidebar