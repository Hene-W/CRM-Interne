import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRequests } from '../context/RequestContext'
import Header from '../component/Header'
import RequestDetailsHeader from '../component/requestsDetails/RequestDetailsHeader'
import RequestDetailsInfo from '../component/requestsDetails/RequestDetailsInfo'
import RequestDetailsNotes from '../component/requestsDetails/RequestDetailsNotes'

const RequestDetailsPage = () => {
  const { id } = useParams()
  const { isLoading, request, getRequest, updateRequest, deleteRequest } = useRequests()

  useEffect(() => {
    getRequest(id)
  }, [id])


  return (
    <div className='flex flex-col md:flex-row gap-6 h-full'>
      {/* Left Column - Details */}
      <div className="md:w-1/3 flex flex-col">
        <Header title="Détails de la demande" showButton={false} />

        {isLoading && !request && (
          <p className="text-gray-500 text-sm">Chargement de la demande...</p>
        )}
        {!isLoading && !request && (
          <p className="text-gray-500">
            Cette demande n’existe pas ou a été supprimée.
          </p>
        )}

        {request && (
          <div className="flex-1 overflow-y-auto space-y-6 mt-4">
            {/* Header */}
            <RequestDetailsHeader request={request} updateRequest={updateRequest} deleteRequest={deleteRequest} />
            {/* Info */}
            <RequestDetailsInfo request={request} updateRequest={updateRequest} />
            
          </div>
        )}
      </div>

      {/* Right column – Notes */}
      <RequestDetailsNotes request={request} updateRequest={updateRequest} />
    </div>
  )
}

export default RequestDetailsPage