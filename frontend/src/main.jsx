import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import RequestDetailsPage from './pages/RequestDetailsPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import ProtectedRoute from './component/ProtectedRoute.jsx'
import { RequestProvider } from './context/RequestContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RequestProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginPage />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route element={<App />}>

                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/requests/:id" element={<RequestDetailsPage />} />
                <Route path="/settings" element={<SettingsPage />} />

              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </RequestProvider>
    </AuthProvider>
  </StrictMode>,
)
