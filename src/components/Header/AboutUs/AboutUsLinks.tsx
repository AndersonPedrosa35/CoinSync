import { useMobile } from '@/utils/useMobile'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './style.module.scss'

export default function AboutUsLinks() {
  const { screenWidth } = useMobile()
  return (
    <section className={style?.containerAboutUs}>
      <Link href="/">
        <Image src='/logo-coinsync.png' alt='Logo' width={130} height={25} />
      </Link>
      { screenWidth > 480 && (
        <>
          <Link href="#">
            About us
          </Link>
          <Link href="#">
            Top Cryptos
          </Link>
        </>
      ) }
    </section>
  )
}
