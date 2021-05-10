import { useState } from 'react';
import Header from './Header';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleScroll = (disabled) => {
    if (disabled) {
      document.body.style.height = '100%';
      document.body.style.overflowY = 'hidden';
      return;
    }

    document.body.style.height = '100%';
    document.body.style.overflowY = 'visible';
  };

  const handleLinkClick = () => {
    toggleScroll(false);
    setIsOpen(false);
  };

  const handleOpenNav = () => {
    toggleScroll(true);
    setIsOpen(true);
  };

  const handleCloseNav = () => {
    toggleScroll(false);
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpenNav}
        className={`${
          isOpen ? 'opacity-0 invisible' : 'opacity-100 visible'
        } z-50 absolute top-6 right-6 transition-all ease-in-out duration-500 outline-none bg-white border-opacity-0 border-none`}
      >
        <img src="/images/menu.svg" alt="menu icon" className="w-10" />
      </button>
      <navigation
        className={`${
          !isOpen ? 'opacity-0 invisible' : 'opacity-95 visible'
        } w-screen h-screen overflow-y-hidden bg-white fixed z-40 top-0 right-0 left-0 bottom-0 transition-all ease-in-out duration-500 outline-none`}
      >
        <button
          type="button"
          onClick={handleCloseNav}
          className={`${
            !isOpen ? 'invisible' : 'visible'
          } z-50 absolute top-6 right-6 transition-all ease-in-out duration-500 outline-none bg-white border-opacity-0 border-none`}
        >
          <img src="/images/cross.svg" alt="close icon" className="w-10" />
        </button>
        <div className="w-10/12 mt-10 mx-auto flex flex-col justify-center">
          <Header />
          <ol className="mt-5 mx-auto">
            <li className="mt-8">
              <a
                href="#about"
                onClick={handleLinkClick}
                className="relative text-black text-4xl"
              >
                About me
              </a>
            </li>
            <li className="mt-8">
              <a
                href="#tech"
                onClick={handleLinkClick}
                className="relative text-black text-4xl"
              >
                Tech
              </a>
            </li>
            <li className="mt-8">
              <a
                href="#lab"
                onClick={handleLinkClick}
                className="relative text-black text-4xl"
              >
                Lab
              </a>
            </li>
            <li className="mt-8">
              <a
                href="#links"
                onClick={handleLinkClick}
                className="relative text-black text-4xl"
              >
                Links
              </a>
            </li>
          </ol>
        </div>
      </navigation>
    </>
  );
};

export default Navigation;
