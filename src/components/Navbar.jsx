import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu Open Status:", !menuOpen); 
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#3DC3E4] text-[#FFFFFF] md:text-[#FFFFFF] shadow-md py-6">
      <nav className="relative container mx-auto flex justify-between items-center w-[90%] m-auto max-w-[1280px]">
        <div className="text-lg font-semibold ">
          <Link to="/">FORTUNECONNECT</Link>
        </div>
        <ul className="hidden md:flex space-x-6 uppercase text-[#0F7D95] md:text-[#FFFFFF]">
          <li>
            <Link to="/" className="hover:text-[#0F7D95] text-lg font-semibold">
              Home
            </Link>
          </li>
          <li>
            <HashLink
              smooth
              to="/#features"
              className="hover:text-[#0F7D95] text-lg font-semibold"
            >
              Features
            </HashLink>
          </li>
          <li>
            <Link
              to="/pricing"
              className="hover:text-[#0F7D95] text-lg font-semibold"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-[#0F7D95] font-semibold hover:text-[#FFFFFF] text-lg"
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="bg-white text-[#0F7D95] rounded-md font-semibold py-2 px-6 hover:bg-[#0F7D95] hover:text-[#FFFFFF] text-lg"
            >
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <i className='bx bx-x text-5xl text-[#FFFFFF]'></i>
            ) : (
              <i className='bx bx-menu text-5xl text-[#FFFFFF]'></i>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } fixed top-0 left-0 h-screen w-3/4 z-50 bg-[#FFFFFF] text-[#0F7D95] text-center md:hidden flex flex-col space-y-4 py-6 uppercase space-y-12 pt-10`}
        >
          <li>
            <Link
              to="/"
              onClick={toggleMenu}
              className="hover:text-[#0F7D95] text-lg font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <HashLink
              smooth
              to="/#features"
              onClick={toggleMenu}
              className="hover:text-[#0F7D95] text-lg font-bold"
            >
              Features
            </HashLink>
          </li>
          <li>
            <Link
              to="/pricing"
              onClick={toggleMenu}
              className="hover:text-[#0F7D95] text-lg font-bold"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              onClick={toggleMenu}
              className="text-[#0F7D95] font-semibold hover:text-[#FFFFFF] text-lg"
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              onClick={toggleMenu}
              className="bg-white text-[#0F7D95] rounded-md font-semibold py-3 px-8 hover:bg-[#0F7D95] hover:text-[#FFFFFF] text-lg"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;