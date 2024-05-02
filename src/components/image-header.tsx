"use client"

import React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import imageHeader from '@/assets/portada.jpeg'
import { Button } from './ui/button'

const ImageHeader = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className='w-full md:w-2/3 md:pt-10 md:p-20 md:h-screen'
      >
        <CarouselContent>
          <CarouselItem>
            <Image src={imageHeader} alt='image' />
          </CarouselItem>
          <CarouselItem>
            <Image src={imageHeader} alt='image' />
          </CarouselItem>
          <CarouselItem>
            <Image src={imageHeader} alt='image' />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className='flex flex-col items-center justify-center w-full md:w-1/4'>
        <h1 className='text-secondary p-2 pt-6 text-xl md:pt-40 md:text-5xl'>Tu gimnasio de artes marciales en Terrassa</h1>
        <p className='text-secondary pt-4 text-center md:pt-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos facilis, ut perferendis corrupti sapiente atque esse ducimus, harum tenetur excepturi nemo odio dignissimos rerum ab quisquam sunt, iste ullam numquam?</p>
        <div className="inline-block pt-10">
          <Button className='px-auto border border-secondary sm:flex items-center justify-between gap-2 sm:gap-7 text-secondary hover:bg-secondary hover:text-primary'>
            Prueba una semana gratis
          </Button>
        </div>
      </div>

    </div>

  );
}

export default ImageHeader