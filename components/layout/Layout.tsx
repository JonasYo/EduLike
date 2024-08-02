import { HTMLAttributes } from 'react';

import Head from 'next/head';

import { ThemeProps } from 'common/types';
import { ScrollToTop, Whatsapp } from 'components';

import Footer from './Footer';
import Header from './Header';

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  theme?: ThemeProps;
}

const Layout = ({ children, theme }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{theme?.title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="main text-body font-body">
        {theme && <Header {...theme} />}
        {children}
        {theme?.footer && <Footer {...theme} />}
        <ScrollToTop />
        {theme?.whatsappContact && <Whatsapp {...theme?.whatsappContact} />}
      </div>
    </>
  );
};

export default Layout;
