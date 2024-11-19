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

const alt = 'Likedu';
const size = {
  width: 1200,
  height: 630,
};

const AboutUs = dynamic(() => import('./components/AboutUs'), { ssr: false });
const History = dynamic(() => import('./components/History'), { ssr: false });

export async function generateMetadata() {
  const { isEnabled } = draftMode();
  const homePage = await getHomePage(isEnabled);

  const title = homePage?.theme?.title || 'Likedu';
  const description = homePage?.theme?.description || 'Default Description';
  const imageUrl = homePage?.theme?.image?.url || '/default-image.png';
  const url = 'https://likedu.com.br/';

  return {
    title: title,
    description: description,
    keywords: homePage?.theme?.keywords,
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: 'Likedu',
      locale: 'pt_BR',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: size.width,
          height: size.height,
          alt: alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [imageUrl],
    },
    canonical: url,
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': 'large',
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    manifest: url + 'manifest.json',
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description: description,
        url: url,
      }),
    },
  };
}

const Home = async () => {
  const { isEnabled } = draftMode();
  const homePage = await getHomePage(isEnabled);

  const isEmpty = (obj: any) => Object.keys(obj).length === 0;

  return (
    <Layout theme={homePage.theme}>
      {!isEmpty(homePage?.banner) && <Banner {...homePage?.banner} />}
      {homePage?.flowchart && <Flowchart {...homePage?.flowchart} />}
      {!isEmpty(homePage?.aboutUs) && <AboutUs {...homePage?.aboutUs} />}
      {!isEmpty(homePage?.ourServices) && (
        <OurServices {...homePage?.ourServices} />
      )}
      {homePage?.history && <History {...homePage?.history} />}
      {!isEmpty(homePage?.someCases) && <SomeCases {...homePage?.someCases} />}
      {!isEmpty(homePage?.contactUs) && <ContactUs {...homePage?.contactUs} />}
      {!isEmpty(homePage?.posts) && <Posts {...homePage?.posts} />}
    </Layout>
  );
};

export default Home;
