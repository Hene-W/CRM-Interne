import { Outlet } from "react-router-dom"

function App() {
  return (
    <div>
      <p className="text-2xl font-bold text-center">hi</p>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default App
