// import { ApolloClient, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//   uri: process.env.GRAPHCMS_PROJECT_API,
//   cache: new InMemoryCache(),
// });

// export default client;

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
});

const clientGraphql = new ApolloClient({
  link: new HttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID ?? ''}/environments/master`,
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN ?? ''}`,
    },
  }),
  cache: new InMemoryCache(),
});

export { client, clientGraphql };
