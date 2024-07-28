'use client';

import { HTMLAttributes } from 'react';

import Head from 'next/head';

import { ScrollToTop, Whatsapp } from 'components';
import { useContent } from 'context/ContentContext';

import Footer from './Footer';
import Header from './Header';

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  whatsapp?: string;
}

const Layout = ({ children }: LayoutProps) => {
  const { content } = useContent();
  return (
    <>
      <Head>
        <title>{content?.theme?.title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="main text-body font-body">
        {content?.theme && <Header {...content?.theme} />}
        {children}
        {content?.theme?.footer && <Footer {...content?.theme} />}
        <ScrollToTop />
        {content?.theme?.whatsappContact && (
          <Whatsapp {...content?.theme?.whatsappContact} />
        )}
      </div>
    </>
  );
};

export default Layout;
