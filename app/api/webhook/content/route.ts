import { NextApiRequest, NextApiResponse } from 'next';

import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 120 });

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const event = req.headers['x-graphcms-event'];
    if (event === 'PUBLISHED' || event === 'UPDATED') {
      cache.flushAll();
      console.info('Cache invalidado devido a atualização de conteúdo');
    }
    res.status(200).json({ message: 'Cache invalidado' });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
};

export default handler;
