import React from 'react';
import Navbar from './Navbar';

import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="w-full px-2 sm:w-x-width">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
