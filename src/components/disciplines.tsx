"use client"

import { Activity, ArrowBigUpDash } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import {DisciplinePropsInterface} from '@/lib/definitions'
import { scrollToTop } from '@/lib/utils';



//Componente de disciplinas en detalle
const Disciplines = ({ name, kcal, duration, history, benefitName1, benefitName2, benefit3, benefit1,benefit2,benefitName3, img1, img2 }: DisciplinePropsInterface) => {


  return (
    <div className='flex flex-col'>
      <div className='bg-primary text-secondary flex flex-col justify-center items-center p-10'>
        <div className='border border-y-secondary border-x-primary w-full flex flex-col md:flex-row md:justify-evenly items-center p-10'>
          <div className='flex flex-col'>
            <h1 className='text-6xl py-5'>{name}</h1>
            <p className='flex'><Activity /> {kcal} kcal/hora</p>
          </div>
          <div className='border p-5 mt-4 md:mt-0 md:p-10 text-2xl'>
            Duracion: {duration} minutos
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='w-full md:p-10 flex flex-col-reverse md:flex-row '>
            <div className='flex flex-col '>
              <h1 className='text-4xl pt-4 '>Historia</h1>
              <p className='pt-8 md:w-2/3 text-lg'>{history}</p>
            </div>
            <Image src={img1} alt='mma' className='md:w-1/2' />
          </div>
          <div className='flex flex-col md:flex-row pt-28'>
            <Image src={img2} alt='mma' className='md:w-1/2' />
            <div className='flex flex-col pt-10 items-start'>
              <h1 className='text-4xl px-8'>Beneficios</h1>
              <ul className='flex flex-col p-8 md:w-2/3'>
                <li className='w-full'>
                  <h1 className='text-xl underline'>{benefitName1}</h1>
                  <p className='pt-4'>{benefit1}</p>
                </li>
                <li>
                  <h1 className='text-xl pt-4 underline'>{benefitName2}</h1>
                  <p className='pt-4'>{benefit2}</p>
                </li>
                <li>
                  <h1 className='text-xl pt-4 underline'>{benefitName3}</h1>
                  <p className='pt-4'>{benefit3}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex justify-end'>
            <Button onClick={scrollToTop}><ArrowBigUpDash size={38} /></Button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Disciplines;
