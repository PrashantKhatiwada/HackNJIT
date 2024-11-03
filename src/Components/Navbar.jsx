import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css'; // Import the CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);   

  };

  return (
    <nav className="bg-white-800   
 text-white py-4">
      <div className="container mx-12 flex justify-start items-center space-x-96">
        <Link to="/" className="font-bold text-2xl">
          Gamify.Work()
        </Link>
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-40 justify-end">
            <li>
              <Link to="/" className='group text-white-500 transition-all duration-300 ease-in-out'><span class="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Home</span></Link>
            </li>
            <li>
              <a href="#projects" className='group text-white-500 transition-all duration-300 ease-in-out'><span class="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Projects</span></a>
            </li>
            <li>
              <a href="#about" className='group text-white-500 transition-all duration-300 ease-in-out'><span class="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">About</span></a>
            </li>
            <li>
              <a href="#team" className='group text-white-500 transition-all duration-300 ease-in-out'><span class="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Team</span></a>
            </li>
          </ul>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}   
 stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>   

        <div className={`md:hidden absolute top-full right-0 bg-white-800 w-full p-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu}>Projects</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>About</Link>   

            </li>
            <li>
              <Link to="/team" onClick={toggleMenu}>Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;