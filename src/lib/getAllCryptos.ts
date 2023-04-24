import { serializeFullDateInitialDay, serializeFullDateNow } from "@/utils/date"

interface RequestCoins  {
  asset_id?: string
  data_end?: string
  data_orderbook_end?: string
  data_orderbook_start?: string
  data_quote_end?: string
  data_quote_start?: string
  data_start?: string
  data_symbols_count?: number
  data_trade_end?: string
  data_trade_start?: string
  id_icon?: string
  name?: string
  type_is_crypto?: number
  volume_1day_usd?: number
  volume_1hrs_usd?: number
  volume_1mth_usd?: number
}

export async function getRatesByCriptoId({ id, coinApi, time }: {id?: string, coinApi: string, time: string}) {
  return fetch(`http://rest.coinapi.io/v1/exchangerate/${id}/USD?apikey=${coinApi}&time=${time}`)
  .then((res) => res.json()).then((res) => { console.log(res); return res }).catch((err) => console.error(err))
}

export async function getAllCryptos({ coinApi }: { coinApi: string }) {
  return fetch(`http://rest.coinapi.io/v1/assets?apikey=${coinApi}`)
    .then((res) => res.json())
}

export async function getCryptosLimited({ sizeItems }: { sizeItems: number }) {
  const coinApi = process.env.COINAPI as string
  try {
    const request = await getAllCryptos({ coinApi })
    const getCryptos = await limitResultsAndAddMoreInfos({ sizeItems, request, coinApi })
    return getCryptos
  } catch (err) {
    console.error(err)
  }
}

async function limitResultsAndAddMoreInfos({ sizeItems, request, coinApi }: { sizeItems: number, request: Array<RequestCoins>, coinApi: string }) {
  let newArray: Array<RequestCoins | any> = []
  let timeNow = serializeFullDateNow(new Date())
  let timeInitial = serializeFullDateInitialDay(new Date())
  for (let index = 0; index < sizeItems; index ++) {
    if (request[index]?.type_is_crypto === 1) {
      const itemNow: any = await getRatesByCriptoId({ id: request[index]?.asset_id, coinApi, time: timeNow})
      const itemInitial: any = await getRatesByCriptoId({ id: request[index]?.asset_id, coinApi, time: timeInitial})
      newArray = [...newArray, { 
        asset_id: request[index]?.asset_id ?? '',
        id_icon: request[index]?.id_icon ?? '',
        name: request[index]?.name ?? '',
        type_is_crypto: request[index]?.type_is_crypto ?? '',
        asset_quote: itemNow?.asset_id_quote ?? '',
        price_usd_now: itemNow?.rate ?? '',
        time_now_day: itemNow?.time ?? '',
        price_usd_initial: itemInitial?.rate ?? '',
        time_initial_day: itemInitial?.time ?? ''
      } ]
    } else {
      sizeItems += 1
    }
  }
  return newArray
}