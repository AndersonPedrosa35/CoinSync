import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const coinApi = process.env.COINAPI
  const getAllCoins = await fetch(`http://rest.coinapi.io/v1/assets?apikey=${coinApi}`)
  res.status(200).json(getAllCoins)
}