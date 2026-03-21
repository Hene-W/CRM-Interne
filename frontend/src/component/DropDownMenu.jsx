import { useEffect, useRef } from "react";

const DropdownMenu = ({ position, open, onClose, items = [] }) => {
  if (!open) return null
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`
        absolute ${position === "bl" ? "right-0 top-full" : position === "tr" ? "left-0 bottom-full" : null} m-2 z-50
        min-w-max max-w-[220px]
        bg-white dark:bg-[#262626] border border-gray-200 dark:border-[#3a3a3a] dark:text-gray-200
        rounded-xl shadow-lg overflow-hidden
      `}
    >
      {items.map((item, index) => {
        if (item.divider) {
          return <div key={index} className="h-px bg-gray-200 dark:bg-[#3a3a3a] my-1" />
        }

        return (
          <button
            key={index}
            disabled={item.disabled}
            onClick={(e) => {
              e.stopPropagation()
              item.onClick?.()
              onClose()
            }}
            className={`
              w-full text-left px-4 py-2 text-sm hover:cursor-pointer
              transition-colors
              ${item.danger
                ? "text-red-500 hover:bg-red-50 dark:hover:bg-[#3a1f1f]"
                : "hover:bg-gray-100 dark:hover:bg-[#2f2f2f]"
              }
              ${item.disabled ? "opacity-50 pointer-events-none" : ""}
            `}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

export default DropdownMenu