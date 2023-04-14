import type { NextApiRequest, NextApiResponse } from 'next'
import getAllCryptos from '@/lib/getAllCryptos'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const getAllCoins = await getAllCryptos()
  res.status(200).json(getAllCoins)
}