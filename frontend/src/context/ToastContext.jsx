import { createContext, useContext } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import { useAuth } from "./AuthContext";

const ToastContext = createContext({
    notify: (msg) => { }
})

export const ToastProvider = ({ children }) => {
    const { token } = useAuth()
    const notify = (msg, type = "error") => {
        if (type === "success") {
            toast.success(msg, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "light",
                transition: Slide,
            });
        } else {
            toast.error(msg, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "light",
                transition: Slide,
            });
        }
    };

    return <ToastContext.Provider value={{ notify }}>
        {children}
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={"light"}
            transition={Slide}
        />
    </ToastContext.Provider>
}

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error("useToast must be used within ToastProvider");
    return context;
};