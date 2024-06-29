"use client"
import { Menu } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import Link from 'next/link'
import DisciplinesMobile from './disciplines-mobile'
import { useState } from "react";

//UI del menu movil
const MobileList = () => {
  const [showDisciplines, setShowDisciplines] = useState(false);

  const toggleDisciplines = () => {
    setShowDisciplines(!showDisciplines);
  }

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Menu />
        </PopoverTrigger>
        <PopoverContent className='py-5'>
          <Link href="/equipo" className='block py-1 text-secondary hover:underline underline-secondary'>Equipo</Link>
          <Link href="/horarios-precios" className='block py-1 text-secondary hover:underline underline-secondary'>Precios y horarios</Link>
          <button onClick={toggleDisciplines} className='block py-1 text-secondary hover:underline underline-secondary'>Disciplinas</button>
          {showDisciplines && <DisciplinesMobile />}
          <Link href="/contacto" className='block py-1 text-secondary hover:underline underline-secondary'>Contacto</Link>
          <Link href='https://wa.me/+34640678978?text=Hola, me gustaría probar una semana gratuita en AETT.' className='block py-1 text-secondary hover:underline underline-secondary'>Prueba una semana gratis</Link>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default MobileList;
