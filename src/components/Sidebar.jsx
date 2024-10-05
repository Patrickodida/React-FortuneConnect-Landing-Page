import React from 'react'
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-[#3DC3E4] text-white">
        <div className='m-auto w-[90%]'>
      <nav className="mt-6 font-bold">
        <ul>
          <li className="p-3">
            <Link to="/profile" className="hover:text-[#0F7D95] text-xl">
            <i class='bx bxs-dashboard mr-2 text-2xl'></i>
              Dashboard
            </Link>
          </li>
          <li className="p-3">
            <Link to="/profile" className="hover:text-[#0F7D95] text-xl">
            <i class='bx bxs-user mr-2 text-2xl'></i>
              Profile
            </Link>
          </li>
          <li className="p-3">
            <Link to="/investments" className="hover:text-[#0F7D95] text-xl">
            <i class='bx bxs-business mr-2 text-2xl'></i>
              Investment
            </Link>
          </li>
          <li className="p-3">
            <Link to="/settings" className="hover:text-[#0F7D95] text-xl">
            <i class='bx bx-cog mr-2 text-2xl'></i>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
        </div>
    </div>
  )
}

export default Sidebar;
