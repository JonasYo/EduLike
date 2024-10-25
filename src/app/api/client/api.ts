import { Content } from 'src/common/types';

import { GET_HOME_PAGE } from './queries';
import transformData from './transformData';

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ['home'] },
    },
  ).then((response) => response.json());
}

export async function getHomePage(isDraftMode: boolean): Promise<Content> {
  const entries = await fetchGraphQL(
    `query {
    homeCollection(where: { slug: "home" }, preview: ${
      isDraftMode ? 'true' : 'false'
    }) {
        items {
          ${GET_HOME_PAGE}
        }
      }
    }`,
    isDraftMode,
  );

  return transformData(entries);
}
