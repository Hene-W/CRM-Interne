import React from 'react'
import RequestListItem from './RequestListItem'

const RequestsList = ({ allRequests, requests, isLoading, searchQuery }) => {
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
                {
                    isLoading ? <p className='text-center text-gray-500 mt-5'>Chargement des demandes...</p>
                        : allRequests.length === 0 ? <p className='text-center text-gray-500 mt-10'>Aucune demande pour le moment</p>
                            : requests.length === 0 ? <p className='text-center text-gray-500 mt-5'>Aucune demande ne correspond aux critères sélectionnés</p>
                                : requests.map(request => (
                                    <RequestListItem key={request._id} request={request} />
                                ))
                }
            </div>
        </div>
    )
}

export default RequestsList