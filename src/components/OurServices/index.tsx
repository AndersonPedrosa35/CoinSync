import { useMobile } from '@/utils/useMobile'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
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

function arrayElementShouldCapture(array: Array<any>) {
  let indexCapture = []
  for (let i = 2; i < array.length; i += 4) {
    indexCapture.push(i);
    indexCapture.push(i+1);
  }
  return indexCapture
}

export default function OurServices() {
  const { screenWidth } = useMobile()
  const indexCapture = arrayElementShouldCapture(items)
  return (
    <section className={style.containerOurServices}>
      <section className={style.containerLeft}>
        { screenWidth > 480 ? items.map((item: any, index) => (
          <OurServiceItem className={ indexCapture.includes(index) ? "spaceLeft" : '' } key={index} {...item} />
        )) : (
          <Carousel
            className='carroselOurServices'
            swipeScrollTolerance={5}
          >
            {items.map((item: any, index) => (
          <OurServiceItem className={ indexCapture.includes(index) ? "spaceLeft" : '' } key={index} {...item} />
        ))}
          </Carousel>
        )
      }
      </section>
      <section className={style.containerRight}>
        <OurServiceItem
          title={"Lorem ipsum"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"}
          who={"Lorem ipsum"}
        />
      </section>
    </section>
  )
}
