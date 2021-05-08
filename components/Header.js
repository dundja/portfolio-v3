import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = (props) => {
  return (
    <header className="py-10 flex justify-between items-center">
      <Image
        src="/images/logo-with-text.png"
        alt="Radivoje Dundjerovic logo"
        width={250}
        height={40}
      />
      <Link href=":mailto:dundja3@gmail.com">
        <a className="text-lg flex justify-center items-center hover:text-blue">
          <Image
            className="mx-3"
            src="/images/email.svg"
            alt="email"
            width={24}
            height={24}
          />
          dundja3@gmail.com
        </a>
      </Link>
    </header>
  );
};

export default Header;
