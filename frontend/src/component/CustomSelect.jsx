import { useEffect, useRef } from "react"

const CustomSelect = ({
  options = [],
  value,
  onChange,
  open,
  setOpen,
}) => {
  const ref = useRef(null)

  // close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [setOpen])

  if (!open) return null

  return (
    <div
      ref={ref}
      className="absolute top-full mt-1 w-full bg-white border border-[#f4f4f4] rounded-lg shadow-lg z-50"
    >
      {options.map((opt) => (
        <div
          key={opt.value}
          onClick={() => {
            onChange(opt.value)
            setOpen(false)
          }}
          className={`px-4 py-2 cursor-pointer hover:bg-gray-100
            ${opt.value === value ? "bg-gray-50 font-medium" : ""}
          `}
        >
          {opt.label}
        </div>
      ))}
    </div>
  )
}

export default CustomSelect