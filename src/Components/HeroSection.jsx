// LandingPage.js
import React from 'react';
import '../styles/HeroSection.css'

const HeroSection = () => {
    return (
      <section className="flex flex-col md:flex-row items-center space-x-12 justify-between p-10 mx-12" id='hero-section'>
        <div className="md:w-1/2 mb-12">
          <h1 className="text-6xl font-bold mb-6">Play. Control.<br></br> Achieve.</h1>
          <h3 className="text-3xl mb-6">Turn Gameplay into Real Work</h3>
          <p className="text-lg mb-6 font-light">
          Play a game, and let our bot handle your tasks through your hand movements. Enjoy seamless fun and productivity combined.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="md:w-7/10">
          {/* <img
            src=""
            alt="Image"
            className="w-full md:w-full mx-auto mt-8"
          /> */}
        </div>
      </section>
    );
  };

export default HeroSection;