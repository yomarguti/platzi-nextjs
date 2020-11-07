import React from 'react';
import Link from 'next/link';

import SVGAvocado from './SVGAvocado';

const AvoHeader = () => {
  return (
    <div className="py-12 flex flex-col items-center">
      <div className="font-bold text-4xl flex justify-center items-center pb-5">
        <span>Yomar</span>
        <SVGAvocado size={60} />
        <span>Avo</span>
      </div>
      <Link href="/yes-or-not">
        <a className="text-lg">¿Deberia comer un aguacate hoy?</a>
      </Link>
    </div>
  );
};

export default AvoHeader;
