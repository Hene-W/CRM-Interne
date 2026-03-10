import React, { useState } from 'react'
import RequestsHeader from '../component/requests/RequestsHeader'
import RequestsToolBar from '../component/requests/RequestsToolBar'
import RequestsList from '../component/requests/RequestsList'
import { IoAdd } from 'react-icons/io5'
import RequestsCard from '../component/requests/RequestsCard'

const HomePage = () => {
  const [selectedStatus, setSelectedStatus] = useState([])
  const [viewMode, setViewMode] = useState("list")


  return (
    <div className='flex flex-col gap-4 min-h-0'>
      <RequestsHeader />
      <button className="md:hidden fixed bottom-5 right-5 bg-[#1f1f1f] hover:bg-[#333333] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
        <IoAdd size={24} />
      </button>

      <RequestsToolBar setViewMode={setViewMode} viewMode={viewMode} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />

      <div className="flex-1 overflow-y-auto">
        <div className="hidden md:block">
          {viewMode === "list" ? <RequestsList /> : <RequestsCard />}
        </div>

        <div className='md:hidden'>
          <RequestsCard />
        </div>
      </div>
    </div>
  )
}

export default HomePage