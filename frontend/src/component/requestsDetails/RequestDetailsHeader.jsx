import React from 'react'

const RequestDetailsHeader = ({ request }) => {
    return (
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
    )
}

export default RequestDetailsHeader