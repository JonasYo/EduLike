'use client';

import Image from 'next/image';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { ThemeProps } from 'common/types';
import SocialNetworks from 'components/SocialNetworks';

const Footer = (props: ThemeProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLink = ({ link, label }: { link: string; label: string }) => {
    return (
      <li>
        <p
          onClick={() => scrollToSection(link)}
          className="text-body-color hover:text-primary inline-block text-base leading-loose"
        >
          {label}
        </p>
      </li>
    );
  };

  return (
    <footer>
      <div className="purple-gradient relative z-10 pb-10 pt-20 text-white lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 lg:flex">
            <div className="max-w-5/12 mr-auto px-4 sm:w-2/3 lg:w-4/12">
              <div className="mb-10 w-full">
                <a href="/#" className="mb-6 inline-block max-w-[160px]">
                  <Image
                    src={props?.footer?.logo?.url}
                    alt="Banner Image"
                    width={144}
                    height={144}
                    className="-mt-4 h-14 w-36"
                  />
                </a>
                <p className="text-body-color mb-7 text-base">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className="markdown-content"
                  >
                    {props?.footer?.subtitle}
                  </ReactMarkdown>
                </p>
              </div>
            </div>

            <div className="px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className=" mb-9 text-lg font-semibold text-white">
                  {props?.footer?.sitemapTitle}
                </h4>

                <ul className="cursor-pointer space-y-3">
                  {props?.footer?.sitemap?.map((item, index) => (
                    <NavLink link={item.link} label={item.label} key={index} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className=" mb-9 text-lg font-semibold text-white">
                  Redes sociais
                </h4>

                <SocialNetworks styles="text-white" />
              </div>
            </div>

            <div className="px-4 sm:w-1/2 lg:w-3/12">
              <h4 className=" mb-9 text-lg font-semibold text-white">
                Contatos
              </h4>
              {props?.footer?.phoneNumber && (
                <p className="mb-4 flex text-sm font-medium">
                  <a
                    href={`tel:${props.footer.phoneNumber}`}
                    className="text-primary flex items-center"
                  >
                    <FaPhoneVolume size={20} className="mr-3" />
                    <span>{props.footer.phoneNumber}</span>
                  </a>
                </p>
              )}
              {props?.footer?.email && (
                <p className="mb-4 flex items-center text-sm font-medium">
                  <a
                    href={`mailto:${props.footer.email}`}
                    className="text-primary flex items-center"
                  >
                    <FaEnvelope size={20} className="mr-3" />
                    <span>{props.footer.email}</span>
                  </a>
                </p>
              )}
              {props?.footer?.address && (
                <p className="flex items-center text-sm font-medium">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.footer.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary flex items-center"
                  >
                    <FaMapMarkerAlt size={28} className="mr-3" />
                    <span>{props.footer.address}</span>
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#ffe285" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>

          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F1C6DF" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center border-t border-[#e193c1] bg-[#d15f9e] py-4">
        <p className="text-lg text-white">
          &copy;{' '}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="markdown-content"
          >
            {props?.footer?.copyright}
          </ReactMarkdown>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
