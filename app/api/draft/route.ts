import { draftMode } from 'next/headers';
// import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');

  if (!secret || !slug) {
    return new Response('Missing parameters', { status: 400 });
  }

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  // const post = await getHomePage(slug);

  // if (!post) {
  //   return new Response('Invalid slug', { status: 401 });
  // }

  draftMode().enable();
  // redirect(`/${post.slug}`);
}
