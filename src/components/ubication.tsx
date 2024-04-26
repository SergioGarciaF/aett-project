import React from 'react'
import { Separator } from './ui/separator'

const Ubication = () => {
    return (
        <section className='text-secondary flex flex-col items-center justify-center pt-8 p-10'>
            <h1 className='text-2xl md:text-5xl pb-5 md:pb-10'>Donde estamos</h1>
            <div className='w-full flex flex-col md:flex-row justify-center gap-10'>
                <iframe className='md:w-1/3'
                    src="https://maps.google.com/maps?width=520&amp;height=480&amp;hl=en&amp;q=Carretera%20de%20Rellinars,%20169%20Terrassa+(AETT%20%7C%20Club%20deportivo%20artes%20marciales)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width="100%" height="480" style={{ border: "0" }} loading="lazy">
                </iframe>
                <div className='w-full md:w-1/12'>
                    <p>Carretera de Rellinars, 169, 08225, Terrassa</p>
                    <div className='pt-2 w-12'>
                        <p>Horario</p>
                        <Separator className='border border-secondary w-full'/>
                    </div>
                    <div className='pt-2'>
                        <p>Lunes a viernes</p>
                        <p>08:00 - 14:00</p>
                        <p>18:00 - 22:00</p>
                        <p className='pt-2'>Sabado</p>
                        <p>08:00 - 11:00</p>
                        <p className='pt-2'>Email</p>
                        <p>aett@aett.com</p>
                        <p className='pt-2'>Telefono</p>
                        <p>+34 666666666</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ubication