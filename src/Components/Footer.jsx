import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-4 text-center">
      <div className="container mx-auto   
 px-4">
        <p>&copy; {new Date().getFullYear()} Binary Bombers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;