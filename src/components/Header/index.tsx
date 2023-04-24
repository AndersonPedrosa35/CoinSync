import { useMobile } from '@/utils/useMobile'
import React from 'react'
import AboutUsLinks from './AboutUs/AboutUsLinks'
import Account from './Account'
import Menu from './Menu'
import Quotes from './Quotes'
import style from "./style.module.scss"

export default function Header() {
  const { screenWidth } = useMobile()
  return (
    <header className={style.header}>
      <section className={style.containerHeader}>
      <AboutUsLinks />
      { screenWidth > 1024 && <Quotes /> }
      { screenWidth > 480 ? <Account /> : <Menu /> }
      </section>
      { screenWidth < 1024 && <Quotes /> }
    </header>
  )
}
