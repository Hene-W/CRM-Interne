import React from 'react'
import { useRequests } from '../../context/RequestContext'
import RequestListItem from './RequestListItem'

const RequestsList = () => {
    const { requests, isLoading } = useRequests()

    return (
        <div>
            <div className="w-full flex gap-2 p-2 rounded-tl-lg rounded-tr-lg bg-[#f4f4f4]">
                <div className="flex-[1.5]">NOM</div>
                <div className="flex-[1.5]">EMAIL</div>
                <div className="flex-1">TYPE</div>
                <div className="flex-1">STATUT</div>
                <div className="flex-1">DATE</div>
                <div className="flex-1">ACTIONS</div>
            </div>
            <div>
                {isLoading ? <p className='text-center text-gray-500 mt-5'>Chargement des demandes...</p> : requests && requests.length > 0 ? requests.map(request => (
                    <RequestListItem key={request._id} request={request} />
                )) : <p className='text-center text-gray-500 mt-10'>Aucune demande pour le moment</p>}
            </div>
        </div>
    )
}

export default RequestsList