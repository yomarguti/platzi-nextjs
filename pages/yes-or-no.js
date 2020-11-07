import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import Link from 'next/link';

const YesOrNo = () => {
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    const timer = getAswear();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const answerElemnt = answer ? (
    <div className="text-super-big text-green-crazy-green py-16 font-bold">{answer}</div>
  ) : (
    <div className="py-10">
      <Loader active inline="centered" size="massive" />
    </div>
  );

  const getAswear = () => {
    setAnswer(null);
    const rand = Math.round(Math.random() * (3000 - 500)) + 500;
    return setTimeout(() => {
      setAnswer(Math.random() >= 0.5 ? 'YES' : 'NO');
    }, rand);
  };

  return (
    <div className="flex flex-col items-center">
      {answerElemnt}
      <button
        className="bg-green-crazy-green rounded text-white px-8 py-2 font-bold mb-4 focus:outline-none"
        onClick={getAswear}
      >
        Intentar de nuevo
      </button>
      <Link href="/">
        <button className="border border-black px-8 py-2 rounded">Volver al inicio</button>
      </Link>
    </div>
  );
};

export default YesOrNo;
