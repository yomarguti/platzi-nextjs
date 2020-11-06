import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBarItem = ({ href, title, children }) => {
  const router = useRouter();

  let classNameLink = 'flex items-center cursor-pointer px-5';

  classNameLink =
    router.pathname === href
      ? `${classNameLink} bg-gray-200`
      : `${classNameLink} hover:bg-gray-100`;

  return (
    <div className="h-full flex relative">
      <Link href={href}>
        <div className={classNameLink}>
          {children}
          <span className="pl-2">{title}</span>
        </div>
      </Link>
    </div>
  );
};

export default NavBarItem;
