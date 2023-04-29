import React from 'react'

interface OurServiceItemProps {
  image?: string
  title: string
  description: string
  who: string
}

export default function OurServiceItem({ image, title, description, who }: OurServiceItemProps) {
  return (
    <section>
      { image && ( <img src={image} alt={title} /> ) }
      <h3>{ who }</h3>
      <h1>{ title }</h1>
      <p>{description}</p>
    </section>
  )
}
