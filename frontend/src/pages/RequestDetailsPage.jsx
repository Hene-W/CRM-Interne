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
      <div className="md:w-1/3">
        <Header title="Détails de la demande" showButton={false} />

        {isLoading && (
          <p className="text-gray-500 text-sm">Chargement de la demande...</p>
        )}
        {!isLoading && !request && (
          <p className="text-gray-500">
            Cette demande n’existe pas ou a été supprimée.
          </p>
        )}

        {request && (
          <div className="space-y-6">
            {/* Header */}
            <RequestDetailsHeader request={request} updateRequest={updateRequest} />
            {/* Info */}
            <RequestDetailsInfo request={request} updateRequest={updateRequest} />
          </div>
        )}
      </div>

      {/* Right column – Notes */}
      <div className="md:w-2/3  bg-white border rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-4">Notes internes</h2>

        {/* notes ici */}
        <RequestDetailsNotes request={request} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default RequestDetailsPage