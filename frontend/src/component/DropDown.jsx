// components/UI/Dropdown.jsx
import { useState } from "react";

const Dropdown = ({ isOpen, setIsOpen, label, options = [], selected = [], onChange }) => {
    const toggleOption = (value) => {
        if (selected.includes(value)) {
            onChange(selected.filter((v) => v !== value));
        } else {
            onChange([...selected, value]);
        }
    };

    return (
        <div className="absolute top-12 z-20">

            <div className=" w-48 bg-white border border-[#f4f4f4] rounded shadow-lg z-50">
                {options.map((option) => (
                    <label
                        key={option.value}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            checked={selected.includes(option.value)}
                            onChange={() => toggleOption(option.value)}
                            className="mr-2"
                        />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;