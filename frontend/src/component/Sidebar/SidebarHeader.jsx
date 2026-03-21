import React from 'react'
import { IoClose } from 'react-icons/io5'

const SidebarHeader = ({ isMobile, setIsOpen }) => {
  return (
    <div className='border-b pb-4 flex justify-between items-center'>
      <h1 className='text-xl font-semibold'>CRM Interne</h1>
      {isMobile && <button onClick={() => setIsOpen(false)} className=' p-2 text-xl'><IoClose /></button>}
    </div>
  )
}

export default SidebarHeader