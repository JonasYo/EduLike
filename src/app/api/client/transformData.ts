import { Content } from 'common/types';

const transformData = (data: any): Content => {
  const response = data?.data?.homeCollection?.items[0];

  return {
    title: response.title,
    slug: response.slug,
    theme: {
      ...response.theme,
      menu: response.theme.menuCollection.items,
      socialNetworks: response.theme.socialNetworksCollection.items,
      footer: {
        ...response.theme.footer,
        sitemap: response.theme.footer.sitemapCollection.items,
      },
    },
    banner: response.banner,
    flowchart: response.flowchart,
    aboutUs: {
      ...response.aboutUs,
      items: response.aboutUs.itemsCollection.items,
    },
    ourServices: {
      ...response.ourServices,
      items: response.ourServices.itemsCollection.items,
    },
    posts: response.posts,
    someCases: {
      ...response.someCases,
      items: response.someCases.itemsCollection.items,
    },
    contactUs: response.contactUs,
  };
};

export default transformData;
