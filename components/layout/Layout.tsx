'use client';

import React from 'react';

import Head from 'next/head';

import Whatsapp from 'components/Whatsapp/Whatsapp';

import Footer from './Footer';
import Header from './Header';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export interface LayoutProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement> {}

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
