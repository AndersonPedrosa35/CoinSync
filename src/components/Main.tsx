import { CryptoContext } from '@/context/cryptoContext'
import React, { useContext, useEffect } from 'react'
import MainBannerHero from './BannerHero/Main'
import Header from './Header'
import NewsLetter from './NewsLetter'
import OurServices from './OurServices'
import Separator from './Separator'
import TopCryptosList from './TopCryptos'

export default function MainHome({ cryptosList }: any) {
  const { setCryptos } = useContext(CryptoContext)

  useEffect(() => {
    setCryptos(cryptosList)
  }, [])

  return (
    <>
      <Header />
      <MainBannerHero />
      <Separator />
      <OurServices />
      <TopCryptosList />
      <NewsLetter />
    </>
  )
}
