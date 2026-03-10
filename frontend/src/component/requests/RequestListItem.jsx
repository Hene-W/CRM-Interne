import React from 'react'

const RequestListItem = ({ request }) => {
    const statusColors = {
        "Nouveau": "bg-gray-300 text-gray-800",
        "Terminé": "bg-green-200 text-green-800",
        "Refusé": "bg-red-200 text-red-800",
        "En cours": "bg-yellow-200 text-yellow-800"
    };

    return (
        <div className="w-full flex items-center gap-2 p-2 bg-white border-b">
            <div className="flex-[1.5] truncate whitespace-nowrap overflow-hidden font-semibold hover:underline hover:cursor-pointer">{request.clientName + (request.firstName ? " " + request.firstName : "")}</div>
            <div className="flex-[1.5] truncate whitespace-nowrap overflow-hidden italic">{request.email || <p className="text-gray-400">Aucun email</p>}</div>
            <div className="flex-1 truncate whitespace-nowrap overflow-hidden">{request.requestType}</div>
            <div className="flex-1">
                <p className={`inline-block truncate whitespace-nowrap overflow-hidden px-2 py-1 rounded-full text-sm
                    ${statusColors[request.status]}`}>
                    {request.status}
                </p>
            </div>
            <div className="flex-1 truncate whitespace-nowrap overflow-hidden">{new Date(request.createdAt).toLocaleDateString('fr-FR')}</div>
            <div className="flex-1 truncate whitespace-nowrap overflow-hidden underline hover:cursor-pointer text-blue-600 hover:text-blue-800">Voir plus...</div>
        </div >
    )
}

export default RequestListItem