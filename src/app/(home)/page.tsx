import dynamic from 'next/dynamic';
import { draftMode } from 'next/headers';

import { getHomePage } from 'app/api/client/api';
import { Layout } from 'components/layout';

import {
  Banner,
  ContactUs,
  Flowchart,
  OurServices,
  Posts,
  SomeCases,
} from './components';

const AboutUs = dynamic(() => import('./components/AboutUs'), { ssr: false });
const History = dynamic(() => import('./components/History'), { ssr: false });

const Home = async () => {
  const { isEnabled } = draftMode();
  const homePage = await getHomePage(isEnabled);

  return (
    <Layout theme={homePage.theme}>
      {homePage?.banner && <Banner {...homePage?.banner} />}
      {homePage?.flowchart && <Flowchart {...homePage?.flowchart} />}
      {homePage?.aboutUs && <AboutUs {...homePage?.aboutUs} />}
      {homePage?.ourServices && <OurServices {...homePage?.ourServices} />}
      {homePage?.history && <History {...homePage?.history} />}
      {homePage?.someCases && <SomeCases {...homePage?.someCases} />}
      {homePage?.contactUs && <ContactUs {...homePage?.contactUs} />}
      {homePage?.posts && <Posts {...homePage?.posts} />}
    </Layout>
  );
};

export default Home;
