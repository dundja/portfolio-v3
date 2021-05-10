import Image from 'next/image';

const Header = () => (
  <header className="py-10 flex md:flex-row flex-col justify-between items-center">
    <Image
      src="/images/logo-text.svg"
      alt="Radivoje Dundjerovic logo"
      width={250}
      height={40}
    />
    <a
      href="mailto:dundja3@gmail.com"
      className="text-lg flex md:mt-0 mt-6 justify-center items-center"
    >
      <Image
        className="mx-3"
        src="/images/email.svg"
        alt="email"
        width={24}
        height={24}
      />
      dundja3@gmail.com
    </a>
  </header>
);

export default Header;
