import { draftMode } from 'next/headers';

export async function GET(request: Request) {
  console.info('Disable draft', request);
  draftMode().disable();
  return new Response('Draft mode is disabled');
}
