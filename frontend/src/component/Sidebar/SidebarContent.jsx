import React from 'react'
import SidebarItem from './SidebarItem'

const SidebarContent = () => {
    return (
        <div className='mt-2 flex flex-col gap-4'>
            <p className='text-sm text-gray-500'>NAVIGATION</p>
            <div className='flex flex-col gap-2'>
                <SidebarItem name="Accueil" to="/" end />
                <SidebarItem name="Dashboard" to="/dashboard" />
            </div>
        </div>
    )
}

export default SidebarContent