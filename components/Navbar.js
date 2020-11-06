import React from 'react';

import SVGAvocado from './SVGAvocado';
import SVGBasquet from './SVGBasket';

import NavBarItem from './NavBarItem';

const Navbar = ({ basquetQuantity = 0 }) => {
  return (
    <div className="w-full h-20 text-xl rounded-md border border-gray-300 shadow">
      <nav className="w-full sm:w-x-width mx-auto  flex justify-between items-center h-full px-2">
        <NavBarItem href="/" title="Avo Store">
          <SVGAvocado />
        </NavBarItem>
        <NavBarItem href="/cart" title={`Canasta (${basquetQuantity})`}>
          <SVGBasquet />
        </NavBarItem>
      </nav>
    </div>
  );
};

export default Navbar;
