import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-[#3DC3E4] text-[#FFFFFF] shadow-md py-4">
            <nav className="container mx-auto flex justify-between w-[90%] m-auto m-w-[1280px] items-center">
                <div className="text-2xl font-bold ">FortuneConnect</div>
                <ul className="flex space-x-6">
                    <li><Link to="/" className="hover:text-[#0F7D95] text-xl font-bold">Home</Link></li>
                    <li><Link to="" className="hover:text-[#0F7D95] text-xl font-bold">Features</Link></li>
                    <li><Link to="/pricing" className="hover:text-[#0F7D95] text-xl font-bold">Pricing</Link></li>
                    <li><Link to="/signup" className="bg-white text-[#0F7D95] font-bold py-3 px-6 hover:bg-[#0F7D95] hover:text-[#FFFFFF] text-xl">Sign Up</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;