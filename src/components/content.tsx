import React from 'react'
import { Heart, TrendingUp, ThumbsUp } from 'lucide-react'

type AdvantagesType = {
    id: number,
    icon: React.ReactNode, // Cambiado LucideIcon a React.ReactNode
    title: string,
    text: string
}[];

const advantages: AdvantagesType = [
    {
        id: 1,
        icon: <Heart />, // Usando el componente React Heart en lugar del objeto directamente
        title: 'Mejora de la condición física',
        text: 'Los deportes de contacto implican un entrenamiento intenso que incluye ejercicios de resistencia, fuerza, flexibilidad y coordinación. Esto conduce a un aumento en la resistencia cardiovascular, la fuerza muscular y la agilidad.'
    },
    {
        id: 2,
        icon: <TrendingUp />, // Usando el componente React TrendingUp en lugar del objeto directamente
        title: 'Desarrollo de habilidades de autodefensa',
        text: 'Al aprender técnicas de golpeo, bloqueo y defensa personal, los practicantes de deportes de contacto adquieren habilidades efectivas para protegerse a sí mismos en situaciones de peligro o confrontación.'
    },
    {
        id: 3,
        icon: <ThumbsUp />, // Usando el componente React ThumbsUp en lugar del objeto directamente
        title: 'Desarrollo de la confianza y la autoestima',
        text: 'A medida que los deportistas de contacto ganan experiencia y habilidades en el ring o tatami, su confianza en sí mismos aumenta. Esto se traduce en una mayor autoestima y una actitud más segura y positiva en la vida cotidiana.'
    }
]

const Content = () => {
    return (
        <section className='text-secondary p-10'>
            <article className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl text-center md:text-5xl'>¿Por qué hacer deportes de contacto?</h1>
                <div className='flex flex-col md:flex-row justify-center items-center p-10 gap-20'>
                    {advantages.map((advantage) => {
                        return (
                            <div className='flex flex-col flex-grow w-full md:w-1/4 border border-secondary rounded-md p-10' key={advantage.id}>
                                <div>
                                    {advantage.icon}
                                </div>
                                <h3 className='pt-3'>{advantage.title}</h3>
                                <p className='pt-3'>{advantage.text}</p>
                            </div>
                        )
                    })}
                </div>
            </article>
        </section>
    )
}

export default Content;
