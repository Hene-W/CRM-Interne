import { useAuth } from "../context/AuthContext";

export const API_URL = import.meta.env.VITE_API_URL

export const fetchWithAuth = async (url, options = {}, token, logout) => {
    const res = await fetch(url, {
        ...options,
        headers: {
            ...(options.headers || {}),
            Authorization: `Bearer ${token}`,
        },
    });

    if (res.status === 401) {
        logout(); 
        return null; 
    }

    return res;
};