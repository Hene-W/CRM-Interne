import { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./AuthContext";
import { API_URL, fetchWithAuth } from "../api/api";

const RequestContext = createContext(null)

export const RequestProvider = ({ children }) => {
    const { token, logout } = useAuth()
    const [requests, setRequests] = useState([])
    const [request, setRequest] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const fetchRequests = async () => {
        try {
            setIsLoading(true)
            const res = await fetchWithAuth(`${API_URL}/api/requests`, {}, token, logout);
            if (!res) return;

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || "Failed to fetch requests")
            }
            setRequests(data)
        } catch (error) {
            console.error("Error fetching requests:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        // whenever the token changes (initial load or login) refetch the requests
        if (token) {
            fetchRequests()
        } else {
            // clear list on logout
            setRequests([])
        }
    }, [token])


    const getRequest = async (id) => {
        setIsLoading(true)
        try {
            const res = await fetchWithAuth(`${API_URL}/api/requests/${id}`, {}, token, logout);
            if (!res) return;

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || "Failed to fetch request")
            }

            setRequest(data)
            return data
        } catch (error) {
            console.error("Error fetching request:", error)
        } finally {
            setIsLoading(false)
        }
    }

    const createRequest = async (requestData) => {
        setIsLoading(true)
        try {
            const res = await fetchWithAuth(`${API_URL}/api/requests`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestData)
            }, token, logout)
            if (!res) return;

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || "Failed to fetch requests")
            }

            setRequests(prev => [data.request, ...prev])
            return data.request
        } catch (error) {
            console.error("Error creating request:", error)
        } finally {
            setIsLoading(false)
        }
    }

    const updateRequest = async (id, updatedData) => {
        setIsLoading(true)
        try {
            const res = await fetchWithAuth(`${API_URL}/api/requests/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData)
            }, token, logout)
            if (!res) return;

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || "Failed to update request")
            }

            setRequests(prev => prev.map(req => req._id === id ? data.request : req))
            setRequest(prev => prev && prev._id === id ? data.request : prev)
            return data.request
        } catch (error) {
            console.error("Error updating request:", error)
        } finally {
            setIsLoading(false)
        }
    }

    const deleteRequest = async (id) => {
        setIsLoading(true)
        try {
            const res = await fetchWithAuth(`${API_URL}/api/requests/${id}`, {
                method: "DELETE",
            }, token, logout)
            if (!res) return;

            if (!res.ok) {
                throw new Error("Failed to delete request")
            }

            setRequests(prev => prev.filter(req => req._id !== id))
            return true
        } catch (error) {
            console.error("Error deleting request:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <RequestContext.Provider
            value={{
                requests,
                request,
                isLoading,
                getRequest,
                createRequest,
                updateRequest,
                deleteRequest
            }}>
            {children}
        </RequestContext.Provider>
    )
}

export const useRequests = () => useContext(RequestContext) 