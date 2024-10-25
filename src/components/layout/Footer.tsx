'use client';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { ThemeProps } from 'common/types';
import Icon from 'components/DynamicIcon/DynamicIcon';
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
          className="text-body-color inline-block text-base leading-loose hover:text-primary"
        >
          {label}
        </p>
      </li>
    );
  };

  return (
    <footer className="bg-[#F5F5F7]">
      <div className="relative z-10 pb-10 pt-20 text-black lg:pb-20 lg:pt-[120px] ">
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
                <h4 className=" mb-9 text-lg font-semibold text-black">
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
                <h4 className=" mb-9 text-lg font-semibold text-black">
                  Redes sociais
                </h4>

                <SocialNetworks styles="text-[#8472EC]" />
              </div>
            </div>

            <div className="px-4 sm:w-1/2 lg:w-3/12">
              <h4 className=" mb-9 text-lg font-semibold text-black">
                Contatos
              </h4>
              {props?.footer?.phoneNumber && (
                <p className="mb-4 flex text-sm font-medium">
                  <a
                    href={`tel:${props.footer.phoneNumber}`}
                    className="flex items-center text-primary"
                  >
                    <Icon
                      name="phone-call"
                      color="#8472EC"
                      size={20}
                      className="mr-3"
                    />
                    <span>{props.footer.phoneNumber}</span>
                  </a>
                </p>
              )}
              {props?.footer?.email && (
                <p className="mb-4 flex items-center text-sm font-medium">
                  <a
                    href={`mailto:${props.footer.email}`}
                    className="flex items-center text-primary"
                  >
                    <Icon
                      name="mail"
                      color="#8472EC"
                      size={20}
                      className="mr-3"
                    />
                    <span>{props.footer.email}</span>
                  </a>
                </p>
              )}
              {/* {props?.footer?.address && (
                <p className="flex items-center text-sm font-medium">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.footer.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary"
                  >
                    <Icon
                      name="mail"
                      color="#8472EC"
                      size={20}
                      className="mr-3"
                    />
                    <span>{props.footer.address}</span>
                  </a>
                </p>
              )} */}
            </div>
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center border-t py-4">
        <p className="text-lg text-black">
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
