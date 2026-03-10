import React from 'react'
import RequestCardItem from './RequestCardItem'

const RequestsCard = ({ allRequests, requests, isLoading }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                isLoading ? <p className='text-center text-gray-500 mt-5'>Chargement des demandes...</p>
                    : allRequests.length === 0 ? <p className='text-center text-gray-500 mt-10'>Aucune demande pour le moment</p>
                        : requests.length === 0 ? <p className='text-center text-gray-500 mt-5'>Aucune demande ne correspond aux critères sélectionnés</p>
                            : requests.map(request => (
                                <RequestCardItem key={request._id} request={request} />
                            ))
            }
        </div>
    )
}

export default RequestsCard