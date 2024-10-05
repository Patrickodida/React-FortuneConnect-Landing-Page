import React from 'react'

const NotificationsCard = ({ message, date, bgColor }) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4 m-2 md:text-left text-center flex flex-col items-center justify-center" style={{ backgroundColor: bgColor }}>
      <p className="text-gray-700">{message}</p>
      <span className="text-sm text-gray-400">{new Date(date).toLocaleDateString()}</span>
    </div>
    </div>
  )
}

export default NotificationsCard;
