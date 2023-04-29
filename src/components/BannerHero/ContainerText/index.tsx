import Image from 'next/image'
import React from 'react'
import style from "./style.module.scss"

export default function ContainerText() {
  return (
    <section className={style.containerText}>
      <h3 className={style.title}>
      Lorem ipsum dolor sit amet, consectetur
      </h3>
      <p className={style.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
      </p>
      <button className={style.accountButtonSignUp}>
        SIGN UP NOW
        <Image src="/arrowButton.svg" alt="icon arrow" width={18} height={18} />
      </button>
      <section className={style.containerCategories}>
        <button className={style.categorieItem}>Cryptos</button>
        <button className={style.categorieItem}>NFTs</button>
        <button className={style.categorieItem}>Games</button>
      </section>
    </section>
  )
}
