import React from 'react';
import Image, { StaticImageData } from 'next/image';
import yoga from '@/assets/yoga.jpeg';
import mma from '@/assets/mma.jpeg';
import boxeo from '@/assets/boxeo.jpeg';
import { Button } from './ui/button';
import Link from 'next/link';
import { SportsInterface } from '@/lib/data';



const sports: SportsInterface[] = [
    {
        id: 1,
        name: 'MMA',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ullam ratione itaque dicta inventore. Amet sunt fugiat, ex rem totam tempora eaque, in nesciunt magni temporibus aspernatur aliquid ullam voluptas!',
        img: mma
    },
    {
        id: 2,
        name: 'Boxeo',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ullam ratione itaque dicta inventore. Amet sunt fugiat, ex rem totam tempora eaque, in nesciunt magni temporibus aspernatur aliquid ullam voluptas!',
        img: boxeo
    },
    {
        id: 3,
        name: 'Yoga',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ullam ratione itaque dicta inventore. Amet sunt fugiat, ex rem totam tempora eaque, in nesciunt magni temporibus aspernatur aliquid ullam voluptas!',
        img: yoga
    }
];

const HeroSports = () => {
    return (
        <section className='text-secondary pt-10 md:p-10 flex flex-col md:flex-row'>
            {sports.map((sport) => {
                return (
                    <div className='flex flex-col pb-10 md:w-2/3 md:p-10' key={sport.id}>
                        <div className="h-52 md:h-72 overflow-hidden">
                            <Image src={sport.img} alt='image' width={500} height={300} /> 
                        </div>
                        <div className='flex flex-col items-center justify-center gap-3 md:pt-3'>
                            <h1 className='text-2xl pt-3'>{sport.name}</h1>
                            <p className='w-full p-2'>{sport.description}</p>
                            <div className="inline-block pt-4">
                                <Button className='px-auto border border-secondary sm:flex items-center justify-between gap-2 sm:gap-7 text-secondary hover:bg-secondary hover:text-primary'>
                                    <Link href={`/disciplinas/${sport.name.toLowerCase()}`}>Saber más</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default HeroSports;
