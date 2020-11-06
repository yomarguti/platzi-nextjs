import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="w-full px-2 sm:w-x-width">{children}</div>
      <footer>This is the footer</footer>
    </div>
  );
};

export default Layout;
