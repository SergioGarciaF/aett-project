import Disciplines from "@/components/disciplines";
import mma from '@/assets/mma.jpeg'

export default function Page() {
    return <Disciplines 
    name='MMA' 
    kcal={800} 
    duration={90} 
    history="Las Artes Marciales Mixtas (MMA) surgieron de competiciones de lucha libre y combate a finales del siglo XIX. El punto de inflexión llegó en 1993 con el primer evento del Ultimate Fighting Championship (UFC) en Estados Unidos, donde se enfrentaron luchadores de diferentes estilos en un formato sin reglas claras. Con el tiempo, se establecieron reglas y regulaciones para garantizar la seguridad de los competidores, convirtiendo a las MMA en un deporte globalmente popular, liderado por organizaciones como UFC, Bellator y ONE Championship." benefitName1='Entrenamiento integral' 
    benefit1='El MMA combina una variedad de disciplinas de artes marciales, como boxeo, muay thai, jiu-jitsu brasileño, judo y lucha libre, entre otras. Esto proporciona un entrenamiento integral que desarrolla habilidades tanto de pie como en el suelo, mejorando la resistencia cardiovascular, la fuerza, la flexibilidad y la coordinación.'
    benefitName2='Autodefensa efectiva' 
    benefit2='El MMA enseña técnicas prácticas y efectivas de autodefensa, preparando a los practicantes para situaciones de combate reales. Al aprender a enfrentarse a oponentes con diferentes estilos y habilidades, los practicantes adquieren confianza en su capacidad para protegerse a sí mismos y a otros en caso de necesidad.' 
    benefitName3='Disciplina mental y emocional' 
    benefit3=' El entrenamiento en MMA fomenta la disciplina mental y emocional. Requiere dedicación, perseverancia y control emocional para superar los desafíos físicos y mentales del entrenamiento y la competición. Esto puede traducirse en una mayor autoestima, resiliencia y capacidad para enfrentar desafíos en otras áreas de la vida.' 
    img1={mma} 
    img2={mma} />
}