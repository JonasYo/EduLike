'use client';

import dynamic from 'next/dynamic';

import { Layout } from 'components/layout';

const AboutUs = dynamic(() => import('./components/AboutUs'));
const Banner = dynamic(() => import('./components/Banner'));
const History = dynamic(() => import('./components/History'));
const KeyFeatures = dynamic(() => import('./components/KeyFeatures'));
const Services = dynamic(() => import('./components/Services'));
const Contact = dynamic(() => import('./components/Contact'));

const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        <KeyFeatures />
        <AboutUs />
        <Services />
        <History />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
