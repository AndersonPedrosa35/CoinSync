import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import ContainerText from './ContainerText'

const carrouselItemsList = [
  { src: "/Carousel.png", description: "Image carousel" },
  { src: "/Carousel.png", description: "Image carousel" },
  { src: "/Carousel.png", description: "Image carousel" }
]

export default function MainBannerHero() {
  return (
    <section className="containerMainBannerHero">
      <ContainerText />
      {/* Carroussel */}
      <section>
        <Carousel
          swipeScrollTolerance={5}
          className="carroselBanner"
        >
          <div>
            <Image src="/Carousel.png" alt="Image carousel" width={400} height={400} />
          </div>
          <div>
            <Image src="/Carousel.png" alt="Image carousel" width={400} height={400} />
          </div>
          <div>
            <Image src="/Carousel.png" alt="Image carousel" width={400} height={400} />
          </div>
        </Carousel>
      </section>
    </section>
  )
}
