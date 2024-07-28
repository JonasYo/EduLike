import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { IoClose, IoMenu } from 'react-icons/io5';

import { HeaderProps } from 'common/types';
import SocialNetworks from 'components/SocialNetworks';
import useDeviceDetection from 'hooks/useDeviceDetection';

const Header = ({ menu }: { menu?: HeaderProps[] }) => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useDeviceDetection();
  console.log('menu', menu);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  const navList = () => (
    <ul
      className={`max-lg:flex max-lg:flex-col max-lg:gap-y-12 lg:flex lg:items-center lg:gap-x-4 ${isMenuOpen ? 'show-menu' : ''}`}
    >
      {menu?.map((item, index) => (
        <li
          key={index}
          className={'nav__item group relative'}
          style={{ transitionDelay: `.${index * 2}s` }}
        >
          <Link
            href={item.link}
            passHref
            onClick={() => isMobile && setIsMenuOpen(false)}
          >
            <div className="flex w-auto flex-row items-center text-2xl font-semibold text-black hover:text-gray-700 lg:text-base">
              {!isMobile && (
                <span className="opacity-0 transition-all duration-300 ease-in-out group-hover:mr-4 group-hover:flex group-hover:opacity-100">
                  <FiArrowUpRight className=" size-5 text-gray-700" />
                </span>
              )}

              <span className="relative">
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gray-700 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );

  const headerStyles = {
    mobile: 'fixed w-full z-40 flex flex-col lg:hidden montserrat',
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
    <header
      className={
        headerStyles[isMobile ? 'mobile' : 'desktop'] +
        `${isMenuOpen && ' inset-0'}`
      }
    >
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
              className="flex items-center px-3 py-2 text-black"
              onClick={handleMenuToggle}
              aria-label="Menu"
            >
              <IoMenu color="text-black" className="size-8" />
            </button>
          </div>

          {!isMobile && navList()}
          {/* {!isMobile && <SocialNetworks />} */}
        </div>

        {isMobile && (
          <div
            className={`absolute top-0 size-full bg-white transition-all ${isMenuOpen ? 'left-0' : '-left-full'}`}
          >
            <div
              className={`flex h-full justify-between px-12 py-24 max-lg:flex-col max-lg:space-y-3.5 lg:items-center`}
            >
              <div className={'max-lg:absolute max-lg:right-5 max-lg:top-6'}>
                <button
                  className="flex items-center px-3 py-2 text-black"
                  onClick={handleMenuToggle}
                  aria-label="Menu"
                >
                  <IoClose color="text-black" className="size-8" />
                </button>
              </div>

              {navList()}
              <SocialNetworks />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default React.memo(Header);
