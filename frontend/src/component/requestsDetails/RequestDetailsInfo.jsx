import React from 'react'

const RequestDetailsInfo = ({request}) => {
    return (
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
    )
}

export default RequestDetailsInfo