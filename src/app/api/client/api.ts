import { Content } from 'common/types';

import { GET_HOME_PAGE } from './queries';
import transformData from './transformData';

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  const res = await fetch(
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
      next: {
        tags: ['home'],
        revalidate: 60 * 60,
      },
    },
  );

  if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);

  return res.json();
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
