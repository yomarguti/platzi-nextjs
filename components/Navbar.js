import React, { useContext } from 'react';

import SVGAvocado from './SVGAvocado';
import SVGBasquet from './SVGBasket';

import NavBarItem from './NavBarItem';

import { Context } from '../store/useCart';

const Navbar = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <div className="w-full h-20 text-xl rounded-md md:border border-gray-300 shadow">
      <nav className="w-full md:w-x-width mx-auto  flex justify-between items-center h-full px-2">
        <NavBarItem href="/" title="Avo Store">
          <SVGAvocado />
        </NavBarItem>
        <NavBarItem href="/cart" title={`Canasta (${state.quantity})`}>
          <SVGBasquet />
        </NavBarItem>
      </nav>
    </div>
  );
};

export default Navbar;
