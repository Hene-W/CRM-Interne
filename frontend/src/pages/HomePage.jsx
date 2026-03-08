import React, { useState } from 'react'
import RequestsHeader from '../component/requests/RequestsHeader'
import RequestsToolBar from '../component/requests/RequestsToolBar'

const HomePage = () => {
  const [selectedStatus, setSelectedStatus] = useState([])
  const [viewMode, setViewMode] = useState("list")

  return (
    <div className='h-full'>
      <div className='flex flex-col gap-4'>
        <RequestsHeader />

        <RequestsToolBar setViewMode={setViewMode} viewMode={viewMode} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />

        <div>
          <p className='text-center text-gray-500 mt-10'>Aucune demande pour le moment</p>
        </div>
      </div>

    </div>
  )
}

export default HomePage