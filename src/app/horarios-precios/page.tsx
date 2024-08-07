import PricingCard from '@/components/pricing-card';
import ScheduleCard from '@/components/schedule-card';
import React from 'react';

import mma from '@/assets/mma.jpeg'
import boxeo from '@/assets/boxeo.jpeg'

const Page = () => {
    return (
        <section className="bg-primary text-secondary body-font overflow-hidden">
            <div className='bg-primary text-secondary border border-y-secondary border-x-primary w-full flex flex-col md:flex-row md:justify-evenly items-center p-10'>
                <div className='flex flex-col'>
                    <h1 className='text-6xl py-5 px-60'>Precios</h1>
                </div>
                <div className='p-5 mt-4 text-center md:w-1/2 md:mt-0 md:p-10 text-2xl'>
                    Descubre nuestras opciones de membresía flexibles y asequibles en el gimnasio de artes marciales. Desde clases individuales hasta paquetes mensuales y anuales, tenemos algo para todos. Únete hoy y comienza tu viaje hacia una vida más activa y saludable.
                </div>
            </div>
            <div className='flex flex-col md:flex-row overflow-hidden justify-center w-full'>
                <PricingCard name='MMA' price={40} />
                <PricingCard name='MMA' price={40} />
                <PricingCard name='MMA' price={40} />
                <PricingCard name='MMA' price={40} />
            </div>
            <div className='bg-primary text-secondary border border-y-secondary border-x-primary w-full flex flex-col md:flex-row md:justify-evenly items-center p-10'>
                <div className='flex flex-col'>
                    <h1 className='text-6xl py-5 px-60'>Horarios</h1>
                </div>
                <div className='p-5 mt-4 text-center md:w-1/2 md:mt-0 md:p-10 text-2xl'>
                    ¡Entrena cuando quieras! Nuestro gimnasio de artes marciales ofrece horarios flexibles para adaptarse a tu agenda. Desde temprano en la mañana hasta tarde en la noche, tenemos clases para todos. Únete a nosotros y encuentra el momento perfecto para mejorar tu salud y bienestar.
                </div>
            </div>
            <div className='flex flex-col md:flex-row p-10 overflow-hidden justify-center items-center w-full'>
                <ScheduleCard img={mma} name='MMA' day1='Martes' day2='Jueves' morning='08:00 - 10:00' evening='18:00-20:00' />
                <ScheduleCard img={boxeo} name='Boxeo' day1='Martes' day2='Jueves' morning='08:00 - 10:00' evening='18:00-20:00' />
                <ScheduleCard img={mma} name='Muay thai' day1='Martes' day2='Jueves' morning='08:00 - 10:00' evening='18:00-20:00' />
                <ScheduleCard img={mma} name='Yoga' day1='Martes' day2='Jueves' morning='08:00 - 10:00' evening='18:00-20:00' />
            </div>
        </section>
    );
};

export default Page;
