import React from 'react'

const PortfolioCard = ({ totalValue }) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Investment Portfolio</h3>
      <p className="text-2xl font-bold text-[#3DC3E4]">${totalValue.toFixed(2)}</p>
    </div>
    </div>
  )
}

export default PortfolioCard;
