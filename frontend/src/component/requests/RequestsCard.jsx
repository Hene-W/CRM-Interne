import React from 'react'
import { useRequests } from '../../context/RequestContext'
import RequestCardItem from './RequestCardItem'

const RequestsCard = () => {
    const { requests, isLoading } = useRequests()

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>



            {isLoading ? <p className='text-center text-gray-500 mt-5'>Chargement des demandes...</p> : requests && requests.length > 0 ? requests.map(request => (
                <RequestCardItem key={request._id} request={request} />
            )) : <p className='text-center text-gray-500 mt-10'>Aucune demande pour le moment</p>}
        </div>
    )
}

export default RequestsCard