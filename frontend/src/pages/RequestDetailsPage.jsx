import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRequests } from '../context/RequestContext'

const RequestDetailsPage = () => {
  const { id } = useParams()
  const { request, getRequest, updateRequest, deleteRequest } = useRequests()


  return (
    <div>
      <h1>Request Details Page</h1>
      {request && (
        <div>
          <p>Nom : {request.clientName}</p>
          <p>Email : {request.email}</p>
          <p>Type : {request.requestType.name}</p>
          <p>Statut : {request.status}</p>
        </div>
      )}
    </div>
  )
}

export default RequestDetailsPage