import React from "react";
import '../styles/main.css'

const ProjectSection = () => {
  return (
    <section
      className="py-16 md:flex-row items-center space-x-12 justify-between p-10 mx-12"
      id="projects"
    >
      <div className="container px-4 flex flex-col md:flex-row items-center gap-6" id="download-now">
      <div className="md:w-1/2 md:ml-8">
          <img src="/image.png" alt="App Image" className="w-200 h-200 image" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Download Our App</h2>
          <p className="text-lg mb-6 font-light">
          Download our app to turn work into play! With just a few taps, bring the power of remote productivity to your fingertips and make every task an engaging game. Join us and make every move count!
          </p>
          <a
            href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" download="applefallinggame.exe">
            Download Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
