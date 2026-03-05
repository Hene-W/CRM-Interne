import { createContext, useState, useEffect, useContext } from "react";
import { API_URL } from "../api/api.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const storedToken = localStorage.getItem("token")
        const storedUser = localStorage.getItem("user")
        if (storedToken && storedUser) {
            setToken(storedToken)
            setUser(JSON.parse(storedUser))
            setIsLoggedIn(true)
        }

        setIsLoading(false)
    }, [])

    const login = async (email, password) => {
        setIsLoading(true)
        try {
            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: email.trim(), password })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || "Login failed")
            }

            setToken(data.token)
            setUser(data.user)
            setIsLoggedIn(true)
            setIsLoading(false)

            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(data.user))

            return true
        } catch (error) {
            console.log("Login error:", error)
            setIsLoading(false)
        }
    }

    const logout = () => {
        setToken(null)
        setUser(null)
        setIsLoggedIn(false)

        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }

    const updatePassword = async (currentPassword, newPassword) => {
        try {
            const res = await fetch(`${API_URL}/api/auth/update-password`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ currentPassword, newPassword })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || "Password update failed")
            }

            return data.message
        } catch (error) {
            console.log("Password update error:", error)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                token,
                user,
                login,
                logout,
                updatePassword,
                isLoggedIn,
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)