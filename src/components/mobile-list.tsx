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
            <PopoverContent>
                <div>
                <Link href="#" className='block text-secondary hover:underline underline-secondary'>Sobre nosotros</Link>
                <Link href="#" className='block text-secondary'>Hola</Link>
                <Link href="#" className='block text-secondary'>Hola</Link>
                <Link href="#" className='block text-secondary'>Hola</Link>
                <Link href="#" className='block text-secondary'>Hola</Link>
                </div>
                
            </PopoverContent>
        </Popover>
  )
}

export default MobileList