import { CryptoContext } from '@/context/cryptoContext'
import React, { useContext } from 'react'

export default function Quotes() {
  const { cryptos } = useContext(CryptoContext)
  console.log(cryptos)
  return (
    <div>Quotes</div>
  )
}
