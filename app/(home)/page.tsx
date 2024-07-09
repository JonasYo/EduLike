'use client';

import Layout from 'components/layout/Layout';

import {
  AboutUs,
  Banner,
  Contact,
  History,
  KeyFeatures,
  Services,
} from './components';

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
