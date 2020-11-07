import React from 'react';
import Link from 'next/link';

import twitterIcon from '@public/twitter.svg';
import githubIcon from '@public/github.svg';

const Footer = () => {
  return (
    <div className="text-lg w-full border border-t pt-12 px-2 mt-6">
      <div className="flex flex-col md:flex-row sm:w-x-width mx-auto">
        <div className="pb-10  sm:flex-1">
          <h3 className="font-bold pb-5">Nosotros</h3>
          <Link href="/about">
            <a>Conoce más</a>
          </Link>
        </div>
        <div className="pb-10  sm:flex-1">
          <h3 className="font-bold pb-5">Servicios</h3>
          <Link href="/">
            <a>Todos los productos</a>
          </Link>
        </div>
        <div className="pb-10  sm:flex-1">
          <h3 className="font-bold pb-5">Hecho para</h3>
          <p>
            Réplica del{' '}
            <a href="https://platzi.com/home" target="_blank">
              Curso de Nextjs
            </a>{' '}
            de Platzi dictado por{' '}
            <a href="https://twitter.com/jonalvarezz" target="_blank">
              @jonalvarezz
            </a>
          </p>
          <p className="pb-5">
            Hecho por{' '}
            <a href="https://twitter.com/yomarguti" target="_blank">
              @yomarguti
            </a>
          </p>
          <div className="flex">
            <img src={twitterIcon} alt="Twitter" width="16px" className="mr-2" />
            <a href="https://twitter.com/yomarguti" target="_blank" className="pr-5">
              Twitter
            </a>
            <img src={githubIcon} alt="Github" width="16px" className="mr-2" />
            <a href="https://github.com/yomarguti" target="_blank">
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="text-xs text-center">
        <p>
          Icons made by{' '}
          <a href="https://www.flaticon.com/authors/freepik" target="_blank">
            Freepik
          </a>{' '}
          from{' '}
          <a href="www.flaticon.com" target="_blank">
            www.flaticon.com
          </a>
        </p>
        <p>
          Avocado images taken from{' '}
          <a href="https://californiaavocado.com/avocado101/avocado-varieties/" target="_blank">
            Avocado 101
          </a>{' '}
          at
          <a href="https://www.californiaavocado.com/" target="_blank">
            California Avocado
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
