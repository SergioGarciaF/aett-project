import Disciplines from "@/components/disciplines";
import boxeo from '@/assets/boxeo.jpeg'

export default function Page() {
    return <Disciplines 
    name='Boxeo' 
    kcal={750} 
    duration={120} 
    history="El boxeo es un deporte con una historia rica y antigua que se remonta a la antigua Grecia, donde era una parte integral de los Juegos Olímpicos antiguos. Desde entonces, ha evolucionado a lo largo de los siglos, pasando por diferentes etapas y adaptándose a diversas culturas y reglas. Durante la era romana, el boxeo adquirió popularidad como forma de entretenimiento público, aunque fue prohibido por varios emperadores debido a su brutalidad. Durante la Edad Media, resurgió en forma de luchas a puño limpio en Inglaterra, y eventualmente se formalizó con reglas y normas durante el siglo XVIII. Desde entonces, el boxeo ha crecido en popularidad en todo el mundo, convirtiéndose en uno de los deportes de combate más populares y emocionantes, con campeones icónicos y eventos legendarios que han dejado una marca indeleble en la historia del deporte." 
    benefitName1='Aumenta la confianza y la autoestima' 
    benefit1='El proceso de mejorar en el boxeo, tanto física como técnicamente, puede aumentar la confianza en uno mismo. Superar desafíos y alcanzar metas en el entrenamiento y en la competición refuerza la autoestima y promueve una actitud positiva hacia uno mismo.'
    benefitName2='Fomenta la disciplina y la perseverancia' 
    benefit2='El boxeo requiere un alto grado de disciplina y perseverancia para alcanzar el éxito. La dedicación al entrenamiento, la adherencia a un régimen de ejercicio regular y la superación de obstáculos en el camino hacia el progreso físico y técnico promueven la disciplina y la determinación.' 
    benefitName3='Promueve la pérdida de peso y la tonificación muscular' 
    benefit3='Debido a su naturaleza intensa y cardiovascular, el boxeo es un excelente ejercicio para quemar calorías y perder peso. Además, los movimientos repetitivos y explosivos ayudan a tonificar y definir los músculos, especialmente en áreas como los brazos, las piernas y el núcleo.' 
    img1={boxeo} 
    img2={boxeo} />
}