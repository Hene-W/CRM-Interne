import React, { useState } from 'react'
import { IoArrowDown, IoCaretDownOutline, IoGridOutline, IoMenu, IoMenuOutline, IoSearch } from 'react-icons/io5'
import DropDownWithCheckbox from '../DropDownWithCheckbox';

const RequestsToolBar = ({ setViewMode, viewMode, selectedStatus, setSelectedStatus, searchQuery, setSearchQuery }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const statusOptions = [
    { value: "Nouveau", label: "Nouveau" },
    { value: "En cours", label: "En cours" },
    { value: "Terminé", label: "Terminé" },
    { value: "Refusé", label: "Refusé" },
  ];

  return (
    <div className="flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between">
      <div className='flex items-center justify-between md:justify-normal gap-4 '>

        {/* VIEW TOGGLE BUTTONS */}
        <div className=' hidden md:flex items-center bg-[#f4f4f4] rounded-lg border-2 border-[#f4f4f4]'>
          <button onClick={() => setViewMode("list")} className={`flex items-center gap-2 p-3 py-1.5 rounded-lg ${viewMode === "list" ? "bg-white" : "text-gray-400"}`}>
            <span className='text-xl'><IoMenuOutline /></span>
            Liste
          </button>
          <button onClick={() => setViewMode("grid")} className={`flex items-center gap-2 p-3 px-4 md:px-3 md:py-1.5 rounded-lg ${viewMode === "grid" ? "bg-white" : "text-gray-400"}`}>
            <span><IoGridOutline /></span>
            Grille
          </button>
        </div>

        {/* FILTERS */}
        <div className='relative'>
          <button onClick={() => setMenuOpen(!menuOpen)} className='flex items-center gap-2 hover:bg-[#f6f7ed] border border-[#f4f4f4] rounded-lg px-3 md:px-4 py-2'>
            Filtrer {selectedStatus.length > 0 && `(${selectedStatus.length})`}
            <span><IoCaretDownOutline /></span>
          </button>
          {menuOpen && (
            <DropDownWithCheckbox
              isOpen={menuOpen}
              setIsOpen={setMenuOpen}
              label="Filtrer par statut"
              options={statusOptions}
              selected={selectedStatus}
              onChange={setSelectedStatus}
            />
          )}
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="relative w-full md:w-64">
        <span className="absolute inset-y-0 left-2 flex items-center text-lg text-gray-400">
          <IoSearch />
        </span>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Rechercher..."
          className="w-full pl-8 pr-3 py-2 bg-[#f4f4f4] rounded-lg  focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
      </div>
    </div>
  )
}

export default RequestsToolBar