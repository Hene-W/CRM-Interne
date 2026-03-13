import React from 'react'
import { Link } from 'react-router-dom';

const RequestCardItem = ({ request }) => {
    const statusColors = {
        "Nouveau": "bg-gray-300 text-gray-800",
        "Terminé": "bg-green-200 text-green-800",
        "Refusé": "bg-red-200 text-red-800",
        "En cours": "bg-yellow-200 text-yellow-800"
    };
    return (
        <div className="border p-4 rounded-lg flex flex-col gap-3 bg-white shadow-sm">
            {/* Header: Nom + Date */}
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold truncate hover:underline">
                    <Link to={`/requests/${request._id}`}>
                        {request.clientName + (request.firstName ? " " + request.firstName : "")}
                    </Link>
                </h2>
                <p className="text-gray-500 shrink-0">
                    {new Date(request.createdAt).toLocaleDateString("fr-FR")}
                </p>
            </div>

            {/* Email */}
            <p className="italic truncate">
                {request.email || <span className="text-gray-500">Aucun email</span>}
            </p>

            {/* Type */}
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">Type :</span>
                <span className="truncate">{request.requestType.name}</span>
            </div>

            {/* Statut */}
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">Statut :</span>
                <span
                    className={`inline-block truncate px-2 py-1 rounded-full font-medium ${statusColors[request.status]}`}
                >
                    {request.status}
                </span>
            </div>

            {/* Action */}
            <div className="flex justify-end">
                <Link to={`/requests/${request._id}`} className="text-blue-600 underline hover:text-blue-800">
                    Voir plus...
                </Link>
            </div>
        </div>
    )
}

export default RequestCardItem