//Para que no de error la pagina pone use client
"use client"

import { Button } from './ui/button'
//Navegación de la pagina
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { useRouter } from 'next/navigation'
import MobileList from './mobile-list'
import Link from 'next/link'


const Navbar = () => {

    const router = useRouter()

    return (
        <nav className='flex items-center justify-between p-6 md:px-20 mx-auto sm:max-width-4xl md:max-width-6xl bg-primary text-secondary text-lg'>
            <div className='items-center justify-between cursor-pointer'>
                <Link href="/">AETT</Link>
            </div>
            <NavigationMenu className='hidden sm:flex space-x-3 ps-8 '>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
                        <NavigationMenuContent className='flex justify-center bg-primary'>
                            <NavigationMenuLink className='p-4 hover:underline'>
                                <Link href='/equipo'>Equipo</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink className='p-4 hover:underline text-nowrap'>
                                <Link href="/horarios-precios">Horarios y precios</Link>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Disciplinas</NavigationMenuTrigger>
                        <NavigationMenuContent className='flex justify-center bg-primary'>
                            <NavigationMenuLink className='p-4 hover:underline'>
                                <Link href='/disciplinas/mma'> <a>MMA</a></Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink className='p-4 hover:underline text-nowrap'>
                                <Link href='/disciplinas/boxeo'>Boxeo</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink className='p-4 hover:underline text-nowrap'>
                                <Link href='/disciplinas/muay-thai'>Muay Thai</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink className='p-4 hover:underline text-nowrap'>
                                <Link href='/disciplinas/yoga'>Yoga</Link>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuLink className='p-4 cursor-pointer'>
                    <Link href={'/contacto'}>Contacto</Link>
                </NavigationMenuLink>
            </NavigationMenu>
            <div className='flex sm:hidden'>
                <MobileList />
            </div>
            <Button className='border border-secondary hidden sm:flex items-center justify-between gap-2 sm:gap-7 hover:bg-secondary hover:text-primary cursor-pointer'>
                <Link target='_blank' href={'https://wa.me/+34640678978?text=Hola, me gustaría probar una semana gratuita en AETT.'}>Prueba una semana gratis</Link>
            </Button>

        </nav>
    )
}

export default Navbar