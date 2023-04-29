import React from 'react'
import OurServiceItem from './OurServiceItem'
import style from "./style.module.scss"

const items = [
  {
    image: '/ourServices/bitcoin.svg',
    who: 'For your company',
    title: 'Crypto Solutions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam'
  },
  {
    image: '/ourServices/IconTransfer.svg',
    who: 'For your company',
    title: 'Crypto Solutions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam'
  },
  {
    image: '/ourServices/grapich.svg',
    who: 'For your company',
    title: 'Crypto Solutions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam'
  },
  {
    image: '/ourServices/computer.svg',
    who: 'For your company',
    title: 'Crypto Solutions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam'
  }
]

export default function OurServices() {
  return (
    <section className={style.containerOurServices}>
      <section>
        {items.map((item: any, index) => (
          <OurServiceItem key={index} {...item} />
        ))}
      </section>
      <section>
        {/* <OurServiceItem /> */}
      </section>
    </section>
  )
}
