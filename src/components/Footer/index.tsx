import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './style.module.scss'

export default function Footer() {
  return (
    <section className={style.containerFooter}>
      <section>
        <p>Copyright © 2022 -  All rights reserved</p>
      </section>
      <section>
      <Link href="/">
        <Image src='/logo-coinsync.png' alt='Logo' width={95} height={16} />
      </Link>
      </section>
    </section>
  )
}
