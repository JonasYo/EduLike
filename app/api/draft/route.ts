import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

import { getHomePage } from '../client/api';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  if (!secret) {
    return new Response('Missing parameters', { status: 400 });
  }

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  const page = await getHomePage(true);
  console.log(page);
  if (!page) {
    return new Response('Page not found', { status: 401 });
  }

  draftMode().enable();
  redirect(`/`);
}
