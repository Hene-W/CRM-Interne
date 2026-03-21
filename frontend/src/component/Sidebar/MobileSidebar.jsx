import { useState } from "react";
import SidebarContent from "./SidebarContent";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import { IoMenuOutline } from "react-icons/io5";

const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Hamburger */}
            <button onClick={() => setIsOpen(true)} className="md:hidden p-2 text-4xl"><IoMenuOutline /> </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white shadow-md transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}
            >
                <div className="p-4 flex flex-col gap-2 h-full">
                    {/* Contenu */}
                    <SidebarHeader isMobile={true} setIsOpen={setIsOpen} />

                    <div className="flex-1 overflow-y-auto ">
                        <SidebarContent onItemClick={() => setIsOpen(false)} />
                    </div>

                    <SidebarFooter onItemClick={() => setIsOpen(false)} />
                </div>
            </div>
        </>
    );
};

export default MobileSidebar;