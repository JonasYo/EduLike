import useDeviceDetection from 'hooks/useDeviceDetection';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { IoClose, IoMenu } from 'react-icons/io5';
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiWhatsappLine,
} from 'react-icons/ri';

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useDeviceDetection();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  const menuOptions = [
    { name: 'Início', link: '/' },
    { name: 'Quem somos', link: '/#about' },
    { name: 'Serviços', link: '/#services' },
    { name: 'Contato', link: '/#contact' },
  ];

  const navList = () => (
    <ul
      className={`max-lg:flex max-lg:flex-col max-lg:gap-y-12 lg:flex lg:items-center lg:gap-x-4 ${
        isMenuOpen ? 'show-menu' : ''
      }`}
    >
      {menuOptions.map((menu, index) => (
        <li
          key={index}
          className={`nav__item group relative`}
          style={{ transitionDelay: `.${index * 2}s` }}
        >
          <Link
            href={menu.link}
            passHref
            onClick={() => isMobile && setIsMenuOpen(false)}
          >
            <div className="flex w-auto flex-row items-center text-2xl font-semibold text-primary-500 hover:text-gray-700 lg:text-base">
              {!isMobile && (
                <span className="opacity-0 transition-all duration-300 ease-in-out group-hover:mr-4 group-hover:flex group-hover:opacity-100">
                  <FiArrowUpRight className=" size-5 text-gray-700" />
                </span>
              )}

              <span className="relative">
                {menu.name}
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gray-700 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );

  const socialLinks = () => (
    <div className="flex gap-4 lg:ml-16">
      <a
        href="https://www.instagram.com/"
        target="_blank"
        className="duration-400 m-0 text-2xl text-primary-500 transition-transform hover:-translate-y-1"
        rel="noreferrer"
      >
        <RiInstagramLine className="lg:size-6" />
      </a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        className="duration-400 m-0 text-2xl text-primary-500 transition-transform hover:-translate-y-1"
        rel="noreferrer"
      >
        <RiLinkedinBoxLine className="size-6" />
      </a>
      <a
        href="https://facebook.com/"
        target="_blank"
        className="duration-400 text-2xl text-primary-500 transition-transform hover:-translate-y-1"
        rel="noreferrer"
      >
        <RiFacebookBoxLine className="size-6" />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        className="duration-400 text-2xl text-primary-500 transition-transform hover:-translate-y-1"
        rel="noreferrer"
      >
        <RiWhatsappLine className="size-6" />
      </a>
    </div>
  );

  const headerStyles = {
    mobile: 'fixed inset-0 z-40 flex flex-col lg:hidden montserrat',
    desktop: `fixed top-0 z-50 w-full transition-all duration-300 ease-in-out montserrat ${
      scroll ? 'bg-white shadow-md' : 'bg-transparent'
    }`,
  };

  const navStyles = {
    mobile: `flex items-center justify-between py-4 px-6 container mx-auto w-full ${
      scroll ? 'bg-white shadow-md' : 'bg-transparent'
    }`,
    desktop: `flex items-center justify-between py-6 container mx-auto w-full lg:px-4`,
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={headerStyles[isMobile ? 'mobile' : 'desktop']}>
      <nav className={navStyles[isMobile ? 'mobile' : 'desktop']}>
        <Link href="/" passHref>
          <Image
            className="size-12"
            src="/media-logo.png"
            alt="AugTrack"
            width={48}
            height={48}
            priority
          />
        </Link>

        <div
          className={`flex h-full max-lg:flex-col max-lg:space-y-3.5 lg:items-center`}
        >
          <div className={`lg:hidden`}>
            <button
              className="flex items-center px-3 py-2 text-primary-500"
              onClick={handleMenuToggle}
            >
              <IoMenu color="text-primary-500" className="size-8" />
            </button>
          </div>

          {!isMobile && navList()}
          {!isMobile && socialLinks()}
        </div>

        {isMobile && (
          <div
            className={`absolute top-0 h-full w-full bg-white transition-all ${isMenuOpen ? 'left-0' : '-left-full'}`}
          >
            <div
              className={`flex h-full justify-between px-12 py-24 max-lg:flex-col max-lg:space-y-3.5 lg:items-center`}
            >
              <div className={'max-lg:absolute max-lg:right-5 max-lg:top-6'}>
                <button
                  className="flex items-center px-3 py-2 text-primary-500"
                  onClick={handleMenuToggle}
                >
                  <IoClose color="text-primary-500" className="size-8" />
                </button>
              </div>

              {navList()}
              {socialLinks()}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
