import React from 'react'

const InvestmentCard = ({ name, performance, status }) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
      <p className={`text-sm ${performance > 0 ? "text-green-500" : "text-red-500"}`}>
        Performance: {performance}%
      </p>
      <p className={`text-sm ${status === "Active" ? "text-blue-500" : "text-gray-500"}`}>
        Status: {status}
      </p>
    </div>
    </div>
  )
}

export default InvestmentCard;
