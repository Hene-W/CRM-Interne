import { useEffect, useRef, useState } from "react"
import { useRequestTypes } from "../context/RequestTypeContext";

const CustomSelect = ({ options = [], value, onChange, open, setOpen, allowAdd = false }) => {
  const ref = useRef(null);
  const { addRequestType } = useRequestTypes(); 
  const [adding, setAdding] = useState(false);
  const [newType, setNewType] = useState("");

  // close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setAdding(false);
        setNewType("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  if (!open) return null;

  const handleAddType = async () => {
    if (!newType.trim()) {
      setAdding(false);
      setNewType("");
      return;
    }
    try {
      const added = await addRequestType(newType.trim());
      onChange(added._id);
    } catch (err) {
      console.error(err); // plus tard tu pourras mettre un toast
    } finally {
      setAdding(false);
      setNewType("");
    }
  };

  return (
    <div
      ref={ref}
      className="absolute top-full mt-1 w-full bg-white border border-[#f4f4f4] rounded-lg shadow-lg z-50"
    >
      {options.map((opt) => (
        <div
          key={opt.value}
          onClick={() => {
            onChange(opt.value);
            setOpen(false);
          }}
          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${opt.value === value ? "bg-gray-50 font-medium" : ""}`}
        >
          {opt.label}
        </div>
      ))}

      {/* Ajouter un nouveau type */}
      {allowAdd && (
        <>
          {adding ? (
            <div className="px-4 py-2 flex flex-col gap-2">
              <input
                type="text"
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
                placeholder="Nouveau type"
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
              <button
                type="button"
                onClick={handleAddType}
                className="bg-[#1f1f1f] hover:bg-[#333333] text-white px-3 py-1 rounded w-full"
              >
                Valider
              </button>
            </div>
          ) : (
            <div
              onClick={() => setAdding(true)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-blue-500 font-medium"
            >
              + Ajouter un type
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CustomSelect