import React from 'react'
import style from './style.module.scss'

interface OurServiceItemProps {
  image?: string
  title: string
  description: string
  who: string
  className?: string
}

export default function OurServiceItem({ image, title, description, who, className }: OurServiceItemProps) {
  return (
    <section className={`${style.containerOurServiceItem} ${className && style[className]}`}>
      { image && ( <img src={image} alt={title} /> ) }
      <h3 className={style.who}>{ who }</h3>
      <h1 className={style.title}>{ title }</h1>
      <p className={style.description}>{description}</p>
    </section>
  )
}
