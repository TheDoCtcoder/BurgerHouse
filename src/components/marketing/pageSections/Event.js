import React from 'react'
import Container from '../../elements/Container'
import AliceCarousel from 'react-alice-carousel';
import '../../../css/carousel.css'

import Image1 from '../../../medias/images/Jorginho-1067777.jpg'
import Image2 from '../../../medias/images/products/Product-2.jpg'
import Image3 from '../../../medias/images/products/Product-3.jpg'
import Heading from '../../elements/DisplayTitles/Heading';

const Slide = ({children,category,title,image}) => {
  return (
    <div className=' grid grid-cols-2  p-6 '>
      <div className="p-10 mb-10">
        <Heading variant="h4">
          {category}
        </Heading>
        <Heading theme="secondary" variant="h3" className="mb-5">
          {title}
        </Heading>
        <p className=' tracking-wide text-lg leading-relaxed font-light text-gray-800'>
        {children}
        </p>
      </div>
      <div className=" relative  w-full h-full">
      <img src={image} alt="Une description" className=' bg-primary absolute top-0 left-0 w-full h-full object-cover  z-0' />
      </div>
    </div>
  )
}

export default function Event() {

  const items = [
    <Slide 
    image={Image1}
    category="évènement à venir"
    title="Vivez la demi-finale"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, voluptas, similique debitis culpa ab incidunt amet accusamus optio, velit nihil expedita maxime? Incidunt voluptates eius iure laudantium cumque ut ipsa.
    </Slide>,
    <Slide 
    image={Image2}
    category="Nouveau Burger"
    title="Burger Delicious "
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, voluptas, similique debitis culpa ab incidunt amet accusamus optio, velit nihil expedita maxime? Incidunt voluptates eius iure laudantium cumque ut ipsa.
    </Slide>,
    <Slide 
    image={Image3}
    category="Nouveau Burger"
    title="Burger Dangerous"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, voluptas, similique debitis culpa ab incidunt amet accusamus optio, velit nihil expedita maxime? Incidunt voluptates eius iure laudantium cumque ut ipsa.
    </Slide>

  ];

  return (
    <Container>
      <div className=" shadow-2xl mb-20 ">
        <AliceCarousel mouseTracking items={items}
          autoPlay
           infinite
            autoPlayInterval={4000}
            animationType='fadeout'
          disableButtonsControls />
      </div>

    </Container>

  )
}
