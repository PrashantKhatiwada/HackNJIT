import React from 'react';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.css'
import ProjectSection from './Components/ProjectPage';
import TeamMember from './Components/Team';
import HrTag from './Components/HrTag';
import { AnimatedBackground } from 'animated-backgrounds';
import AboutSection from './Components/AboutSection';

const App = () => {
  return (
    <BrowserRouter> 
    <AnimatedBackground animationName="starryNight" />
    <Navbar />
    <HeroSection />
    <HrTag />
    <ProjectSection />
    <HrTag />
    <AboutSection />
    <HrTag />
    <TeamMember />
    <HrTag />
    <Footer />
  </BrowserRouter>
  );
};

export default App;