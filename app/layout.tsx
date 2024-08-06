import { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Barlow, Montserrat_Alternates } from 'next/font/google';

import { AOSInit } from 'components/AOSInit/AOSInit';
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

export const metadata: Metadata = {
  title: 'Edu Like',
  description:
    'A Edu Like utiliza o marketing digital para criar sites, redes sociais e anúncios digitais para marcas de todos os tamanhos.',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AOSInit />

      <body
        className={`${montserrat_alternates_init.variable} ${barlow_init.variable}`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export default RootLayout;
