import React from 'react'
import Header from "../component/Header"
import DashboardItem from '../component/DashboardItem'
import { useRequests } from '../context/RequestContext'


const DashboardPage = () => {
  const { requests } = useRequests()

  const totalRequests = requests?.length

  const statusCounts = requests.reduce((acc, req) => {
    acc[req.status] = (acc[req.status] || 0) + 1
    return acc
  }, {})

  const statuses = ["Nouveau", "En cours", "Terminé", "Refusé"];

  return (
    <div>
      <Header title="Dashboard" showButton={false} />

      <div className="p-6 flex flex-col gap-6">
        {/* Total des demandes */}
        <div className="bg-[#1f1f1f] text-white p-6 rounded-lg shadow-md text-center space-y-2">
          <p className="text-sm">Total des demandes</p>
          <p className="text-3xl font-bold">{totalRequests}</p>
        </div>

        {/* Statuts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {statuses.map(status => (
            <DashboardItem
              key={status}
              status={status}
              count={statusCounts[status] || 0}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage