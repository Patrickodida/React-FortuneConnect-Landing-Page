import React from "react";

const Hero = () => {
  return (
    <main>
      <section className="bg-[#3DC3E4] text-center">
        <div className="text-[#FFFFFF]">
          <h1 className="text-8xl font-bold mb-6 text-center uppercase">
            Welcome to Fortune Connect
          </h1>
          <p className="text-4xl mb-8">
            A platform that connects you to success.
          </p>
        </div>
        <div className="mt-6">
          <a
            href="#signup"
            className="bg-white text-[#3DC3E4] text-xl py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-[#0F7D95] hover:text-[white] transition-colors duration-300 mr-4"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="bg-[#0F7D95] text-[white] text-xl py-3 px-6 rounded-lg font-semibold hover:bg-[white] hover:text-[#0F7D95] transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </section>
    </main>
  );
};

export default Hero;
