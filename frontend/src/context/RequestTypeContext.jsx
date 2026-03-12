import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { API_URL } from "../api/api";

const RequestTypeContext = createContext(null)

export const RequestTypeProvider = ({ children }) => {
    const { token } = useAuth()
    const [requestTypes, setRequestTypes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchRequestTypes = async () => {
        setIsLoading(true)
        try {
            const res = await fetch(`${API_URL}/api/request-types`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error("Failed to fetch request types")
            }

            setRequestTypes(data)
        } catch (error) {
            console.error("Error fetching request types:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (token) fetchRequestTypes()
    }, [token])

    const addRequestType = async (name) => {
        setIsLoading(true)
        if (!name || name.trim() === "") {
            setIsLoading(false)
            throw new Error("Request type name cannot be empty")
        }

        try {
            const res = await fetch(`${API_URL}/api/request-types`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ name })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error("Failed to add request type")
            }

            setRequestTypes(prev => [...prev, data.requestType])
        } catch (error) {
            console.error("Error adding request type:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <RequestTypeContext.Provider
            value={{
                requestTypes,
                isLoading,
                fetchRequestTypes,
                addRequestType
            }}>
            {children}
        </RequestTypeContext.Provider>
    )

}

export const useRequestTypes = () => useContext(RequestTypeContext) 