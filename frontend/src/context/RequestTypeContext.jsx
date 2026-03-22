import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { API_URL, fetchWithAuth } from "../api/api";
import { useToast } from "./ToastContext";

const RequestTypeContext = createContext(null)

export const RequestTypeProvider = ({ children }) => {
    const { token, logout } = useAuth()
    const [requestTypes, setRequestTypes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { notify } = useToast()

    const fetchRequestTypes = async () => {
        setIsLoading(true)
        try {
            const res = await fetchWithAuth(`${API_URL}/api/request-types`, {}, token, logout);

            if (!res) return;

            const data = await res.json();

            setRequestTypes(data);
        } catch (error) {
            console.error("Error fetching request types:", error)
            notify("Erreur lors du chargement des types de demandes. Veuillez réessayer.", "error")
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
            const res = await fetchWithAuth(`${API_URL}/api/request-types`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name })
            }, token, logout);
            if (!res) return

            const data = await res.json()

            if (!res.ok) {
                throw new Error("Failed to add request type")
            }

            setRequestTypes(prev => [...prev, data.requestType])
            return data.requestType
        } catch (error) {
            console.error("Error adding request type:", error)
            notify("Erreur lors de la création du type de demande. Veuillez réessayer.", "error")
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