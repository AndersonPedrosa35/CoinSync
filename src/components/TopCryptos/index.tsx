import { CryptoContext } from '@/context/cryptoContext'
import Image from 'next/image'
import React, { useContext } from 'react'
import { CoinContext } from '../Header/Quotes'
import style from './style.module.scss'

export default function TopCryptosList() {
  const { cryptos } = useContext(CryptoContext)
  return (
    <section>
      <h3>Top Cryptos</h3>
      <section>
        <table className={style.containerTable}>
          <thead>
            <tr>
              <td>#</td>
              <td>Crypto</td>
              <td>Price</td>
              <td>Change</td>
              <td>Trade</td>
            </tr>
          </thead>
          {cryptos.map((coin: CoinContext, index: number) => (
            <tr key={index}>
              <td>{ index + 1 }</td>
              <td>
                <Image src={coin?.logo_image} alt={`cryptocurrency ${coin?.name}`} width={32} height={32} />
                <p>{coin?.name}</p>
              </td>
              <td>
                {`US$${coin?.quote?.USD?.price.toFixed(2)}`}
              </td>
              <td>
                { `${coin?.quote?.USD?.percent_change_24h.toFixed(2)}%` }
              </td>
              <td>
                <button type='button'>Buy</button>
              </td>
            </tr>
          ))}
        </table>
      </section>
    </section>
  )
}
