//Para que no de error la pagina pone use client
"use client"

import { Button } from './ui/button'
//Navegación de la pagina
import { useRouter } from 'next/navigation'
import MobileList from './mobile-list'


const Navbar = () => {

    const router = useRouter()

    return (
        <div className='flex items-center justify-between p-6 md:px-20 mx-auto cursor-pointer sm:max-width-4xl md:max-width-6xl bg-primary text-secondary text-lg'>
            <div className='items-center justify-between'>
                AETT
            </div>
            <ul className='hidden sm:flex space-x-3 ps-8 '>
                <li className='hover:underline underline-secondary'>Sobre nosotros</li>
                <li className='hover:underline underline-secondary'>Horarios</li>
                <li className='hover:underline underline-secondary'>Precios</li>
                <li className='hover:underline underline-secondary'>Clases</li>
            </ul>
            <div className='flex sm:hidden'>
                <MobileList />
            </div>
            <Button className='border border-secondary hidden sm:flex items-center justify-between gap-2 sm:gap-7 hover:bg-secondary hover:text-primary'>
                Prueba una semana gratis
            </Button>

        </div>
    )
}

export default Navbar