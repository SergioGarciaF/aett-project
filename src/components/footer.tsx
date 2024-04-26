import React from 'react'
import { Separator } from './ui/separator'
import { Instagram, Twitter } from 'lucide-react'

type iconType = React.ReactNode;

const Footer = () => {
    return (
        <footer className='flex flex-col bg-primary md:pt-8'>
            <Separator className='w-full border border-secondary' />
            <div className='flex flex-col md:flex-row justify-between p-10 pt-8 text-secondary'>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <p className='text-xs'>Siguenos en</p>
                    <ul className='flex gap-2'>
                        <li className='cursor-pointer'><Instagram width={18} /></li>
                        <li className='cursor-pointer'><Twitter width={18} /></li>
                    </ul>
                </div>
                <p className='text-center pt-3 md:pt-0'>AETT <span className='text-xs'>© Copyright 2024 todos los derechos reservados</span></p>
            </div>
        </footer>
    )
}

export default Footer