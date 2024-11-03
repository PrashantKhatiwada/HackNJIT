import React from 'react';

const AboutSection = () => {
  return (
    <section
      className="py-16 md:flex-row items-center space-x-12 justify-between p-10 mx-12"
      id="about"
    >
      <div className="container px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-6 font-light">
          "Imagine controlling a robotic hand in a bustling factory—right from the comfort of your home! Through a game-like interface, you simply play, catching virtual apples or running through a fun dinosaur adventure, and our system replicates your actions in real-time on the production floor. Say goodbye to monotonous tasks and hello to global flexibility and productivity—all while enjoying a game!"
          </p>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <img src="/test.png" alt="App Image" className="w-200 h-200 image " />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;