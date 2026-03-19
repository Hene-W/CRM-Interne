import { Outlet } from "react-router-dom"
import Sidebar from "./component/Sidebar"

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-64 md:min-h-screen border-b md:border-b-0 md:border-r bg-white">
        <Sidebar />
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-hidden h-screen p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default App
