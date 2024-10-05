import React from "react";
import UserImage from "../images/user-reg-circle.png";
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
          <Link to="/" className="text-xl font-semibold">
            FORTUNECONNECT
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img src={UserImage} alt="" className="w-10 h-10 rounded-full" />
            <span>{loggedInUser ? loggedInUser.name : "Guest"}</span>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-white hover:bg-[#3DC3E4] hover:text-white text-[#0F7D95] px-4 py-2 rounded"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
