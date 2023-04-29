import { serializeFullDateInitialDay, serializeFullDateNow } from "@/utils/date"
import cryptosList from "../utils/cryptos.json"

const API_BASE_URL = "https://pro-api.coinmarketcap.com"
const CMC_API_KEY = process.env.CMC_API_KEY as string

export async function getCurrencyIconsByTerm(term: string) {
  return fetch(`${API_BASE_URL}/v2/cryptocurrency/info?CMC_PRO_API_KEY=${CMC_API_KEY}&symbol=${term}&aux=logo,symbol,`)
}

export async function getAllCryptos() {
  return fetch(`${API_BASE_URL}/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${CMC_API_KEY}`)
    .then((res) => res.json())
}

export async function getCryptosLimited({ sizeItems }: { sizeItems: number }) {
  try {
    // const request = await getAllCryptos({ coinApi })
    // const getCryptos = await limitResultsAndAddMoreInfos({ sizeItems, request, coinApi })
    return cryptosList
  } catch (err) {
    console.error(err)
    return cryptosList
  }
}

// async function limitResultsAndAddMoreInfos({ sizeItems, request, coinApi }: { sizeItems: number, request: Array<RequestCoins>, coinApi: string }) {
//   let newArray: Array<RequestCoins | any> = []
//   let timeNow = serializeFullDateNow(new Date())
//   let timeInitial = serializeFullDateInitialDay(new Date())
//   // Um laço de repetição para executar uma requisição sobre cada moeda afim de obter informações de preço para calcular a variação da moeda no dia
//   for (let index = 0; index < sizeItems; index ++) {
//     if (request[index]?.type_is_crypto === 1) {
//       const itemNow: any = await getRatesByCriptoId({ id: request[index]?.asset_id, coinApi, time: timeNow})
//       const itemInitial: any = await getRatesByCriptoId({ id: request[index]?.asset_id, coinApi, time: timeInitial})
//       newArray = [...newArray, { 
//         asset_id: request[index]?.asset_id ?? '',
//         id_icon: request[index]?.id_icon ?? '',
//         name: request[index]?.name ?? '',
//         type_is_crypto: request[index]?.type_is_crypto ?? '',
//         asset_quote: itemNow?.asset_id_quote ?? '',
//         price_usd_now: itemNow?.rate ?? '',
//         time_now_day: itemNow?.time ?? '',
//         price_usd_initial: itemInitial?.rate ?? '',
//         time_initial_day: itemInitial?.time ?? ''
//       } ]
//     } else {
//       sizeItems += 1
//     }
//   }
//   return newArray
// }