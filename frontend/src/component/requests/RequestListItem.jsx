import React from 'react'
import { Link } from 'react-router-dom';
import { statusColors } from "../../constants/statusColors";

const RequestListItem = ({ request }) => {

    return (
        <div className="w-full flex items-center gap-2 p-2 bg-white border-b">
            <div className="flex-[1.5] truncate whitespace-nowrap overflow-hidden font-semibold hover:underline hover:cursor-pointer"><Link to={`/requests/${request._id}`}>{request.clientName + (request.firstName ? " " + request.firstName : "")}</Link></div>
            <div className="flex-[1.5] truncate whitespace-nowrap overflow-hidden italic">{request.email || <p className="text-gray-400">Aucun email</p>}</div>
            <div className="flex-1 truncate whitespace-nowrap overflow-hidden">{request.requestType.name}</div>
            <div className="flex-1">
                <p className={`inline-block truncate whitespace-nowrap overflow-hidden px-2 py-1 rounded-full text-sm
                    ${statusColors[request.status]}`}>
                    {request.status}
                </p>
            </div>
            <div className="flex-1 truncate whitespace-nowrap overflow-hidden">{new Date(request.createdAt).toLocaleDateString('fr-FR')}</div>
            <div className="flex-1 truncate whitespace-nowrap overflow-hidden underline hover:cursor-pointer text-blue-600 hover:text-blue-800"><Link to={`/requests/${request._id}`}>Voir plus...</Link></div>
        </div >
    )
}

export default RequestListItem