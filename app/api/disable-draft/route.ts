import { draftMode } from 'next/headers';

export async function GET(request: Request) {
  console.log('Disable draft', request);
  draftMode().disable();
  return new Response('Draft mode is disabled');
}
