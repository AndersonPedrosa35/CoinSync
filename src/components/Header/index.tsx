import { useMobile } from '@/utils/useMobile'
import React, { useState } from 'react'
import AboutUsLinks from './AboutUs'
import Account from './Account'
import Menu from './Menu'
import ModalAccount from './ModalAccount'
import Quotes from './Quotes'
import style from "./style.module.scss"

export default function Header() {
  const [modalSignIn, setModalSignIn] = useState(false)
  const { screenWidth } = useMobile()
  return (
    <header className={style.header}>
      <section className={style.containerHeader}>
      <AboutUsLinks />
      { screenWidth > 1024 && <div /> }
      { screenWidth > 1024 && <Quotes /> }
      { screenWidth > 480 ? <Account setModalSignIn={setModalSignIn} /> : <Menu /> }
      </section>
      { screenWidth < 1024 && <Quotes /> }
      { modalSignIn && <ModalAccount setModalSignIn={setModalSignIn} /> }
    </header>
  )
}
