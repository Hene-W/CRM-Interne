import React from 'react'
import { statusColors } from "../constants/statusColors";

const DashboardItem = ({ status, number }) => {
    

    return (
        <div>
            <div className={`${statusColors[status] || "bg-gray-100 text-gray-700"} p-4 rounded-lg space-y-2 shadow`}>
                <p className="text-sm">{status}</p>
                <p className="text-xl font-bold text-black">{number}</p>
            </div>
        </div>
    )
}

export default DashboardItem