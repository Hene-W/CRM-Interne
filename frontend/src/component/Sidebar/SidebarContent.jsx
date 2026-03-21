import React from 'react'
import SidebarItem from './SidebarItem'

const SidebarContent = ({onItemClick }) => {
    return (
        <div className='mt-2 flex flex-col gap-4'>
            <p className='text-sm text-gray-500'>NAVIGATION</p>
            <div className='flex flex-col gap-2'>
                <SidebarItem name="Accueil" to="/" end onClick={onItemClick} />
                <SidebarItem name="Dashboard" to="/dashboard" onClick={onItemClick} />
            </div>
        </div>
    )
}

export default SidebarContent