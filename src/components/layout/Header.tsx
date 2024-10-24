'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { IoClose, IoMenu } from 'react-icons/io5';

import { ThemeProps } from 'common/types';
import SocialNetworks from 'components/SocialNetworks';
import useDeviceDetection from 'hooks/useDeviceDetection';

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

  const navList = () => (
    <ul
      className={`max-lg:flex max-lg:flex-col max-lg:gap-y-12 lg:flex lg:items-center lg:gap-x-4 ${isMenuOpen ? 'show-menu' : ''}`}
    >
      {props?.menu?.map((item, index) => (
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
            <div
              className={`flex w-auto flex-row items-center text-2xl font-semibold text-black hover:text-[#8472EC] lg:text-base`}
            >
              {!isMobile && (
                <span className="opacity-0 transition-all duration-300 ease-in-out group-hover:mr-4 group-hover:flex group-hover:opacity-100">
                  <FiArrowUpRight className=" size-5 text-[#8472EC]" />
                </span>
              )}

              <span className="relative">
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#8472EC] transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );

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
          />
        </a>

        <div
          className={`flex h-full max-lg:flex-col max-lg:space-y-3.5 lg:items-center`}
        >
          <div className={`lg:hidden`}>
            <button
              className="flex items-center px-3 py-2 text-white"
              onClick={handleMenuToggle}
              aria-label="Menu"
            >
              <IoMenu color="lg:text-white" className="size-8" />
            </button>
          </div>

          {!isMobile && navList()}
        </div>

        {isMobile && (
          <div
            className={`absolute top-0 z-10 size-full bg-white transition-all ${isMenuOpen ? 'left-0' : '-left-full'}`}
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
