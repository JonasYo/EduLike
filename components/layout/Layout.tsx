'use client';

import { HTMLAttributes } from 'react';

import Head from 'next/head';

import { ScrollToTop, Whatsapp } from 'components';

import Footer from './Footer';
import Header from './Header';

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Experimento 626</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="main text-body font-body">
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <Whatsapp />
      </div>
    </>
  );
};

export default Layout;
