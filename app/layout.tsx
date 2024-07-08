import React from 'react';
import { Montserrat_Alternates, Barlow } from 'next/font/google';
import 'styles/tailwind.css';

const montserrat_alternates_init = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat_alternates',
});

const barlow_init = Barlow({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat_alternates_init.variable} ${barlow_init.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
