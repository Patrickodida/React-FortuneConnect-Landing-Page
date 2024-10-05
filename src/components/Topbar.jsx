import React from "react";
import UserImage from "../images/user-reg.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  // Retrieve the logged-in user from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Handle sign out
  const handleSignOut = () => {
    // Remove the logged-in user from localStorage
    localStorage.removeItem("loggedInUser");
    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="p-4 bg-[#0F7D95] text-white shadow-md">
      <div className="flex justify-between items-center w-[98%] m-auto max-w-[1280px]">
        <div>
          <Link to="/" className="text-sm md:text-xl font-semibold">
            FORTUNECONNECT
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img src={UserImage} alt="" className="w-4 h-4 md:w-7 md:h-7 rounded-full filter invert" />
            <span className="text-sm md:text-lg">{loggedInUser ? loggedInUser.name : "Guest"}</span>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-white hover:bg-[#3DC3E4] hover:text-white text-[#0F7D95] px-2 py-1 md:px-4 md:py-2 rounded text-sm md:text-lg"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
