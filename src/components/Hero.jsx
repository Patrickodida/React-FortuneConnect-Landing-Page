import React from "react";
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  return (
    <main>
      <section className="bg-[#3DC3E4] text-center min-h-screen flex flex-col items-center pt-10 md:pt-2">
        <div className="text-[#FFFFFF] w-[90%] md:w-[65%] mx-auto">
          <h1 className="text-[20px] md:text-[50px] font-bold mb-6 text-center uppercase font-extrabold leading-[50px] md:leading-[90px]">
            Connecting Local Capital <br /> To Investment Ideas
          </h1>
          <p className="text-xl md:text-xl m-8">
            Empowering communities to build wealth through collective investment.
          </p>
        </div>
        <div className="mt-[80px] md:mt-20">
          <Link
            to="/signup"
            className="bg-white text-[#3DC3E4] text-xl md:text-2xl py-3 md:py-3 px-6 md:px-6 rounded-lg font-semibold shadow-lg hover:bg-[#0F7D95] hover:text-[white] transition-colors duration-300 mr-4"
          >
            Get Started
          </Link>
          <HashLink
            smooth to="/#features"
            className="bg-[#0F7D95] text-[white] text-xl md:text-2xl py-3 md:py-3 px-6 md:px-6 rounded-lg font-semibold hover:bg-[white] hover:text-[#0F7D95] transition-colors duration-300"
          >
            Learn More
          </HashLink>
        </div>
      </section>
    </main>
  );
};

export default Hero;
