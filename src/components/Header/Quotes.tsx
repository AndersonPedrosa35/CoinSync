import { CryptoContext } from '@/context/cryptoContext'
import React, { useContext } from 'react'
import style from "./style.module.scss"


interface Quotes {
  price: number
  volume_24h: number
  volume_change_24h: number
  percent_change_1h: number
  percent_change_24h: number
  percent_change_7d: number
  percent_change_30d: number
  percent_change_60d: number
  percent_change_90d: number
}
export interface CoinContext {
  id: number,
  name: string,
  slug: string,
  symbol: string,
  quote: { USD: Quotes },
  last_updated: string,
  logo_image: string
}

export default function Quotes() {
  const { cryptos } = useContext(CryptoContext)
  console.log(cryptos)
  return (
    <section className={style.containerQuotes}>
      { cryptos.map((coin: CoinContext, index: number) => (
          <section key={index} className={style.containerQuote}>
            <h3 className={style.symbol}>{coin?.symbol}</h3>
            <div className={style.containerPrice}>
            <h3 className={style.price}>{`$${coin?.quote?.USD?.price.toFixed(2)}`}</h3>
            <h5 className={style.variation}>{coin?.quote?.USD?.percent_change_24h.toFixed(3)}</h5>
            </div>
          </section>
        )) }
    </section>
  )
}
