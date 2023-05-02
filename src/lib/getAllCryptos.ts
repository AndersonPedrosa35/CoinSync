import cryptosList from "../utils/cryptos.json"

const API_BASE_URL = "https://pro-api.coinmarketcap.com"
const CMC_API_KEY = process.env.CMC_API_KEY as string

interface CoinMarketCapListing {
    "id": string
    "name": string,
    "symbol": string
    "slug": string
    "num_market_pairs": number
    "date_added": string
    "tags": Array<string>
    "max_supply": number,
    "circulating_supply": number
    "total_supply": number
    "infinite_supply": boolean
    "platform": any
    "cmc_rank": number
    "self_reported_circulating_supply": any
    "self_reported_market_cap": any
    "tvl_ratio": any
    "last_updated": string
    "quote": {
      [key: string]: {
        "price": number
        "volume_24h": number
        "volume_change_24h": number
        "percent_change_1h": number
        "percent_change_24h": number
        "percent_change_7d": number
        "percent_change_30d": number
        "percent_change_60d": number
        "percent_change_90d": number
        "market_cap": number
        "market_cap_dominance": number
        "fully_diluted_market_cap": number
        "tvl": any
        "last_updated": string
      }
    }
}

export async function getCurrencyIconsByTerm(term: string) {
  return fetch(`${API_BASE_URL}/v2/cryptocurrency/info?CMC_PRO_API_KEY=${CMC_API_KEY}&symbol=${term}&aux=logo`)
  .then((res) => res.json())
}

export async function getAllCryptos() {
  return fetch(`${API_BASE_URL}/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${CMC_API_KEY}`)
    .then((res) => res.json())
}

export async function getCryptosLimited({ sizeItems }: { sizeItems: number }) {
  try {
    const request = await getAllCryptos()
    const getCryptos = await limitResultsAndAddMoreInfos({ sizeItems, request })
    return getCryptos
  } catch (err) {
    console.error(err)
    return cryptosList
  }
}

async function limitResultsAndAddMoreInfos({ sizeItems, request }: { sizeItems: number, request: {data: Array<CoinMarketCapListing>} }) {
  let newArray: Array<CoinMarketCapListing | any> = []
  // Um laço de repetição para executar uma requisição sobre cada moeda afim de obter informações o logo e executar um serialize
  for (let index = 0; index < sizeItems; index ++) {
    const getLogo: any = await getCurrencyIconsByTerm(request?.data[index]?.symbol)
      newArray = [...newArray, { 
        id: request?.data[index]?.id ?? '',
        name: request?.data[index]?.name ?? '',
        slug: request?.data[index]?.slug ?? '',
        symbol: request?.data[index]?.symbol ?? '',
        quote: request?.data[index]?.quote ?? '',
        last_updated: request?.data[index]?.last_updated ?? '',
        logo_image: getLogo?.data[request?.data[index]?.symbol]?.[0]?.logo ?? '',
      } ]
  }
  return newArray
}