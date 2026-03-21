import { NavLink } from "react-router-dom";

const SidebarItem = ({ name, to, end = false, onClick }) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `
        p-2 px-4 rounded-lg transition cursor-pointer
        ${
          isActive
            ? "bg-[#1f1f1f] text-white hover:bg-[#333333]"
            : "bg-white hover:bg-[#f4f4f4]"
        }
        `
      }
      onClick={onClick}
    >
      {name}
    </NavLink>
  );
};

export default SidebarItem;