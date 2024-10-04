import React from "react";
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <main>
      <section className="bg-[#3DC3E4] text-center min-h-screen flex flex-col  items-center">
        <div className="text-[#FFFFFF] w-[70%] mx-auto">
          <h1 className="text-[60px] font-bold mb-6 text-center uppercase font-extrabold leading-[90px]">
            Connecting Local Capital <br /> To Investment Ideas
          </h1>
          <p className="text-2xl m-8">
            Empowering communities to build wealth through collective investment.
          </p>
        </div>
        <div className="mt-20">
          <Link
            to="/signup"
            className="bg-white text-[#3DC3E4] text-2xl py-4 px-8 rounded-lg font-semibold shadow-lg hover:bg-[#0F7D95] hover:text-[white] transition-colors duration-300 mr-4"
          >
            Get Started
          </Link>
          <Link
            to="/"
            className="bg-[#0F7D95] text-[white] text-2xl py-4 px-8 rounded-lg font-semibold hover:bg-[white] hover:text-[#0F7D95] transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Hero;
