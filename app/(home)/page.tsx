'use client';

import React from 'react';

import dynamic from 'next/dynamic';

import { Layout } from 'components/layout';
import { useContent } from 'context/ContentContext'; // Ajuste o caminho conforme necessário

const AboutUs = dynamic(() => import('./components/AboutUs'));
const Banner = dynamic(() => import('./components/Banner'));
const History = dynamic(() => import('./components/History'));
const Flowchart = dynamic(() => import('./components/Flowchart'));
const OurServices = dynamic(() => import('./components/OurServices'));
const Posts = dynamic(() => import('./components/Posts'));
const SomeCases = dynamic(() => import('./components/SomeCases'));
const ContactUs = dynamic(() => import('./components/ContactUs'));

const Home = () => {
  const { content } = useContent();
  console.log('content', content);

  return (
    <Layout>
      {content?.banner && <Banner {...content?.banner} />}
      {content?.flowchart && <Flowchart {...content?.flowchart} />}
      {content?.aboutUs && <AboutUs {...content?.aboutUs} />}
      {content?.ourServices && <OurServices {...content?.ourServices} />}
      {content?.history && <History {...content?.history} />}
      {content?.someCases && <SomeCases {...content?.someCases} />}
      {content?.contactUs && <ContactUs {...content?.contactUs} />}
      {content?.posts && <Posts {...content?.posts} />}
    </Layout>
  );
};

export default React.memo(Home);
