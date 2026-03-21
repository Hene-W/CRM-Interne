import { useAuth } from '../../context/AuthContext'
import { IoLogOutOutline } from "react-icons/io5";
import SidebarItem from './SidebarItem';

const SidebarFooter = ({onItemClick}) => {
    const { user, logout } = useAuth()

    return (
        <div className='flex flex-col gap-2 pt-4 border-t'>
            <SidebarItem name="Paramètre" to="/settings" onClick={onItemClick} />
            <div className='p-2 px-4 flex justify-between items-center'>
                <p>{user.email.split('@')[0]}</p>
                <button onClick={logout} className='text-xl rounded-lg hover:bg-[#f4f4f4] p-2'><IoLogOutOutline /></button>
            </div>
        </div>
    )
}

export default SidebarFooter