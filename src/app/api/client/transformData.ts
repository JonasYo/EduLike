import { Content } from 'common/types';

const transformData = (data: any): Content => {
  const response = data?.data?.homeCollection?.items[0];

  const menuItems = response?.theme?.menuCollection?.items;
  const socialNetworksItems = response?.theme?.socialNetworksCollection?.items;
  const sitemapItems = response?.theme?.footer?.sitemapCollection?.items;
  const aboutUsItems = response?.aboutUs?.itemsCollection?.items;
  console.log(response?.aboutUs?.itemsCollection?.items[0]);
  const ourServicesItems = response?.ourServices?.itemsCollection?.items;
  const someCaseItems = response?.someCases?.itemsCollection?.items;

  return {
    title: response?.title,
    slug: response?.slug,
    theme: {
      ...response?.theme,
      menu: menuItems,
      socialNetworks: socialNetworksItems,
      footer: {
        ...response?.theme?.footer,
        ...(sitemapItems && { sitemap: sitemapItems }),
      },
    },
    banner: response?.banner,
    flowchart: response?.flowchart,
    aboutUs: {
      ...response?.aboutUs,
      ...(aboutUsItems && { items: aboutUsItems }),
    },
    ourServices: {
      ...response?.ourServices,
      ...(ourServicesItems && { items: ourServicesItems }),
    },
    posts: response?.posts,
    someCases: {
      ...response?.someCases,
      ...(someCaseItems && { items: someCaseItems }),
    },
    contactUs: response?.contactUs,
  };
};

export default transformData;
