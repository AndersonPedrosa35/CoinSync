import type { NextApiRequest, NextApiResponse } from 'next'
import { getCryptosLimited } from '@/lib/getAllCryptos'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const getAllCoins = await getCryptosLimited({ sizeItems: 10 })
  res.status(200).json(getAllCoins)
}