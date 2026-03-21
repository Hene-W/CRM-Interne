import React from 'react'
import Header from "../component/Header"
import DashboardItem from '../component/DashboardItem'

const DashboardPage = () => {
  return (
    <div>
      <Header title="Dashboard" showButton={false} />

      <div className="p-6 flex flex-col gap-6">
        {/* Total des demandes */}
        <div className="bg-[#1f1f1f] text-white p-6 rounded-lg shadow-md text-center space-y-2">
          <p className="text-sm">Total des demandes</p>
          <p className="text-3xl font-bold">15</p>
        </div>

        {/* Statuts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <DashboardItem status="Nouveau" number="13" />
          <DashboardItem status="Terminé" number="13" />
          <DashboardItem status="En cours" number="13" />
          <DashboardItem status="Refusé" number="13" />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage