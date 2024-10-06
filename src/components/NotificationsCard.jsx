import React from 'react'

const NotificationsCard = ({ title, message, date, actionText, bgColor }) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4 m-2 md:text-left text-center flex flex-col items-center justify-center" style={{ backgroundColor: bgColor }}>
        <h3 className='text-lg font-semibold text-gray-700'>{title}</h3>
      <p className="text-gray-700">{message}</p>
      <span className="text-sm text-gray-400">{new Date(date).toLocaleDateString()}</span>
      <button className="mt-0 text-blue-500 underline hover:text-blue-700">
            {actionText}
          </button>
    </div>
    </div>
  )
}

export default NotificationsCard;
