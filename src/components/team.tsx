import React from 'react'
import TeamCard from './team-card'
import trainer from '@/assets/trainer.jpeg'



const Team = () => {
    return (
        <div className='bg-primary text-secondary flex flex-col justify-center items-center pt-8 p-10 ps-10 overflow-hidden'>
            <div className='border border-y-secondary border-x-primary w-full flex flex-col md:flex-row md:justify-evenly items-center p-10'>
                <div className='flex flex-col'>
                    <h1 className='text-6xl py-5 px-60'>Nuestro equipo</h1>
                </div>
                <div className='p-5 mt-4 text-center md:w-1/2 md:mt-0 md:p-10 text-2xl'>
                Nuestros experimentados entrenadores de artes marciales se adaptan a todos los niveles de habilidad. Con años de experiencia, te guiarán con pasión y compromiso en tu viaje de desarrollo físico y técnico.
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center flex-wrap pt-10 gap-6'>
                <TeamCard img={trainer} name='Bryan Altimira' description='Lorem ipsum giedufgygaeffd' speciality1='MMA' speciality2='Grappling' achievement1='Campeon de España 2022' />
                <TeamCard img={trainer} name='Jero' description='Lorem ipsum giedufgygaeffd' speciality1='Boxeo' achievement1='Campeon de Cataluña 2000' achievement2='Campeon Valles Occidental 2019' />
                <TeamCard img={trainer} name='Jero' description='Lorem ipsum giedufgygaeffd' speciality1='Boxeo' achievement1='Campeon de Cataluña 2000' achievement2='Campeon Valles Occidental 2019' />
                <TeamCard img={trainer} name='Jero' description='Lorem ipsum giedufgygaeffd' speciality1='Boxeo' achievement1='Campeon de Cataluña 2000' achievement2='Campeon Valles Occidental 2019' />
            </div>
        </div>
    )
}

export default Team