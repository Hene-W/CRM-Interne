import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import RequestsToolBar from '../component/requests/RequestsToolBar'
import RequestsList from '../component/requests/RequestsList'
import { IoAdd } from 'react-icons/io5'
import RequestsCard from '../component/requests/RequestsCard'
import { useRequests } from '../context/RequestContext'
import CreateRequestModal from '../component/requests/CreateRequestModal'

const HomePage = () => {
  const [selectedStatus, setSelectedStatus] = useState([])
  const [viewMode, setViewMode] = useState("list")
  const [searchQuery, setSearchQuery] = useState('')
  const normalizedSearch = searchQuery.trim().toLowerCase();
  const [openModal, setOpenModal] = useState(false)
  const { requests, isLoading } = useRequests()

  const filteredBySearch = requests.filter((request) => {
    if (!normalizedSearch) return true
    const fullName = `${request.clientName} ${request.firstName || ""}`.toLowerCase()
    return fullName.includes(normalizedSearch)
  })

  const filteredRequests = filteredBySearch.filter((request) => {
    if (selectedStatus.length === 0) return true
    return selectedStatus.includes(request.status);
  })

  return (
    <div className='flex flex-col gap-4 min-h-0'>
      <Header title="Demandes clients" setOpenModal={setOpenModal} showButton={true} />
      <button onClick={() => setOpenModal(true)} className="md:hidden fixed bottom-5 right-5 bg-[#1f1f1f] hover:bg-[#333333] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
        <IoAdd size={24} />
      </button>

      {openModal && <CreateRequestModal isOpen={true} onClose={() => setOpenModal(false)} />}

      <RequestsToolBar
        setViewMode={setViewMode} viewMode={viewMode}
        selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus}
        searchQuery={searchQuery} setSearchQuery={setSearchQuery}
      />

      <div className="flex-1 overflow-y-auto">
        <div className="hidden md:block">
          {viewMode === "list" ? <RequestsList allRequests={requests} requests={filteredRequests} isLoading={isLoading} /> : <RequestsCard allRequests={requests} requests={filteredRequests} isLoading={isLoading} />}
        </div>

        <div className='md:hidden'>
          <RequestsCard allRequests={requests} requests={filteredRequests} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}

export default HomePage