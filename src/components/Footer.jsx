import React from 'react';

const Footer = () => {
  return (
   <footer className="bg-violet-800 text-white text-center py-4">
    © Personal Portfolio | All Right Reserved {new Date().getFullYear()}
  </footer>
  );
};

export default Footer;
