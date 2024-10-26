'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { IoClose, IoMenu } from 'react-icons/io5';

import { ThemeProps } from 'common/types';
import SocialNetworks from 'components/SocialNetworks';
import useDeviceDetection from 'hooks/useDeviceDetection';

import NavList from './NavList';

const Header = (props: ThemeProps) => {
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

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${scroll ? 'bg-white text-black shadow-md' : 'bg-transparent'} ${isMenuOpen && ' inset-0'} montserrat z-50 w-full transition-all duration-300 ease-in-out`}
    >
      <nav
        className={
          'container mx-auto flex w-full items-center justify-between px-6 py-4 lg:px-4 lg:py-6'
        }
      >
        <a href="/#" className="inline-block max-w-[160px]">
          <Image
            src={props.logo.url}
            alt="Logo Image"
            width={0}
            height={0}
            className="h-14 w-36"
            priority
          />
        </a>

        <div
          className={`flex h-full max-lg:flex-col max-lg:space-y-3.5 lg:items-center`}
        >
          <div className={`lg:hidden`}>
            <button
              className="flex items-center px-3 py-2 text-black"
              onClick={handleMenuToggle}
              aria-label="Menu"
            >
              <IoMenu color="lg:text-white" className="size-8" />
            </button>
          </div>

          <div className={`hidden lg:flex`}>
            <NavList
              isMenuOpen={true}
              isMobile={false}
              menuOptions={props.menu}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
        </div>

        <div
          className={`absolute top-0 z-10 size-full bg-white transition-all ${isMenuOpen ? 'left-0' : '-left-full'} lg:hidden`}
        >
          <div
            className={`flex h-full justify-between px-12 py-24 max-lg:flex-col max-lg:space-y-3.5 lg:items-center`}
          >
            <div className={'max-lg:absolute max-lg:right-5 max-lg:top-6'}>
              <button
                className="flex items-center px-3 py-2 lg:text-white"
                onClick={handleMenuToggle}
                aria-label="Menu"
              >
                <IoClose color="text-white" className="size-8" />
              </button>
            </div>

            <NavList
              isMenuOpen={isMenuOpen}
              isMobile={isMobile}
              menuOptions={props.menu}
              setIsMenuOpen={setIsMenuOpen}
            />
            <SocialNetworks />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default React.memo(Header);
