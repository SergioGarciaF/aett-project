import React from 'react'
import { Menu } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import Link from 'next/link'

const MobileList = () => {
  return (
    <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent className='py-5'>
                <Link href="/equipo" className='block py-1 text-secondary hover:underline underline-secondary'>Equipo</Link>
                <Link href="/horarios-precios" className='block py-1 text-secondary hover:underline underline-secondary'>Precios y horarios</Link>
                <Link href="/disciplinas" className='block py-1 text-secondary hover:underline underline-secondary'>Disciplinas</Link>
                <Link href="/contacto" className='block py-1 text-secondary hover:underline underline-secondary'>Contacto</Link>
                <Link href="#" className='block py-1 text-secondary hover:underline underline-secondary'>Prueba una semana gratis</Link>
                
                
            </PopoverContent>
        </Popover>
  )
}

export default MobileList