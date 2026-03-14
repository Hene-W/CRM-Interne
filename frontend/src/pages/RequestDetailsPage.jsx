import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRequests } from '../context/RequestContext'
import Header from '../component/Header'

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
          <p className="text-gray-500">Chargement de la demande...</p>
        )}
        {!isLoading && !request && (
          <p className="text-gray-500">
            Cette demande n’existe pas ou a été supprimée.
          </p>
        )}

        {!isLoading && request && (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {request.clientName} {request.firstName && request.firstName}
              </h1>

              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-gray-100">
                  Type : <strong>{request.requestType?.name || "Aucun"}</strong>
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-100">
                  Statut : <strong>{request.status}</strong>
                </span>
              </div>
            </div>

            <div className=" bg-white border rounded-xl p-4 space-y-4">
              <h2 className="text-lg font-semibold">Détails client</h2>

              <div>
                <p className="text-sm font-medium text-gray-600">Nom</p>
                <p className="text-gray-800 truncate max-w-full">
                  {request.clientName} {request.firstName && request.firstName}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-600">Email</p>
                <p className="text-gray-800 truncate max-w-full">
                  {request.email || "Aucune adresse e-mail"}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-600">Date de création</p>
                <p className="text-gray-800">
                  {new Date(request.createdAt).toLocaleDateString("fr-FR")}
                </p>
              </div>
            </div>

          </div>

        )}
      </div>
      {/* Right column – Notes */}
      <div className="md:w-2/3  bg-white border rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-4">Notes internes</h2>

        {/* notes list ici */}
        {!isLoading && request?.noteInterne ? "notes...." : <p className="text-sm text-gray-500">
          Aucune note pour le moment.
        </p>}

        {/* plus tard : textarea + bouton */}
      </div>
    </div>
  )
}

export default RequestDetailsPage