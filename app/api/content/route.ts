import { NextResponse } from 'next/server';
import NodeCache from 'node-cache';

import { client } from '../client';
import transformData from '../utils/transformData';

const cache = new NodeCache({ stdTTL: 1 });

async function fetchGraphCMSData() {
  const response = await client.getEntries({
    content_type: 'home',
    include: 10,
  });
  const dataFormatted = transformData(response);
  return dataFormatted;
}

export async function GET() {
  try {
    const url = '/api/content';
    const cachedData = cache.get(url);
    if (cachedData) {
      return NextResponse.json(cachedData);
    }

    const data = await fetchGraphCMSData();
    cache.set(url, data);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro no GET:', error);
    return NextResponse.json(
      { message: 'Erro interno do servidor', error },
      { status: 500 },
    );
  }
}

export async function POST() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
