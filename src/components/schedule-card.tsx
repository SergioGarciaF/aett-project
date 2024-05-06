import React from 'react'
import Image from 'next/image'
import { ScheduleInterface } from '@/lib/data'
import { Button } from './ui/button'
import Link from 'next/link'

const ScheduleCard = ({ img, name, day1, day2, day3, day4, day5, morning, evening, night }: ScheduleInterface) => {
  return (
    <section className="container w-full p-10 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <div className="p-4 mb-6 w-full sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <Image alt="content" className=" w-full h-full inline-block" src={img} />
            </div>
            <div>

            </div>
            <h2 className="mt-5 text-xl font-medium title-font">{name}</h2>
            <table className="mt-4">
              <tbody className='flex flex-col justify-center'>
                <table>
                  <tbody>
                    {day1 && (
                      <tr className="border-b border-gray-200">
                        <td className="py-2 pr-10">{day1}</td>
                        <td className="py-2 pr-4">{morning}</td>
                        <td className="py-2 pl-8">{evening}</td>
                        <td className="py-2 pl-8">{night}</td>
                      </tr>
                    )}
                    {day2 && (
                      <tr className="border-b border-gray-200">
                        <td className="py-2 pr-10">{day2}</td>
                        <td className="py-2 pr-4">{morning}</td>
                        <td className="py-2 pl-8">{evening}</td>
                        <td className="py-2 pl-8">{night}</td>
                      </tr>
                    )}
                    {day3 && (
                      <tr className="border-b border-gray-200">
                        <td className="py-2 pr-10">{day3}</td>
                        <td className="py-2 pr-4">{morning}</td>
                        <td className="py-2 pl-8">{evening}</td>
                        <td className="py-2 pl-8">{night}</td>
                      </tr>
                    )}
                    {day4 && (
                      <tr className="border-b border-gray-200">
                        <td className="py-2 pr-10">{day4}</td>
                        <td className="py-2 pr-4">{morning}</td>
                        <td className="py-2 pl-8">{evening}</td>
                        <td className="py-2 pl-8">{night}</td>
                      </tr>
                    )}
                    {day5 && (
                      <tr className="border-b border-gray-200">
                        <td className="py-2 pr-10">{day5}</td>
                        <td className="py-2 pr-4">{morning}</td>
                        <td className="py-2 pl-8">{evening}</td>
                        <td className="py-2 pl-8">{night}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </tbody>
            </table>
            <div className=' md:pt-5'>
              <Button className='border border-secondary hidden sm:flex items-center justify-between gap-2 sm:gap-7 hover:bg-secondary hover:text-primary cursor-pointer'>
                <Link target='_blank' href={`https://wa.me/+34640678978?text=Hola, me gustaría probar una semana gratuita de ${name} en AETT.`}>Prueba una semana gratis</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScheduleCard
