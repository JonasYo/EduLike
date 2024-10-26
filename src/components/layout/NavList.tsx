'use client';

import React from 'react';

import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

import { HeaderProps } from 'common/types';

export type NavListProps = {
  menuOptions: HeaderProps[];
  isMobile: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
};

const NavList = ({
  menuOptions,
  isMobile,
  isMenuOpen,
  setIsMenuOpen,
}: NavListProps) => (
  <ul
    className={`max-lg:flex max-lg:flex-col max-lg:gap-y-12 lg:flex lg:items-center lg:gap-x-4 ${isMenuOpen ? 'show-menu' : ''}`}
  >
    {menuOptions?.map((item, index) => (
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

export default React.memo(NavList);
