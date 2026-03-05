import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const {isLoggedIn, isLoading} = useAuth()

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />
    }

  return (
    <Outlet />
  )
}

export default ProtectedRoute