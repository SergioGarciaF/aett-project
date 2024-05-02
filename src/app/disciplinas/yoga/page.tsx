import Disciplines from "@/components/disciplines";
import yoga from '@/assets/yoga.jpeg'

export default function Page() {
    return <Disciplines 
    name='Yoga' 
    kcal={600} 
    duration={60} 
    history="El yoga tiene sus raíces en la antigua India, datando de miles de años atrás. Se desarrolló como una práctica espiritual y filosófica que busca la unión del cuerpo, la mente y el espíritu. Los primeros registros del yoga se remontan a los Vedas, antiguos textos hindúes que contienen enseñanzas y prácticas relacionadas con la meditación, la respiración y la conexión con lo divino.
    A lo largo de los siglos, el yoga evolucionó y se diversificó, dando lugar a diferentes ramas y estilos. Durante el período clásico del yoga, alrededor del primer milenio antes de Cristo, se codificaron muchas de las enseñanzas y prácticas que conocemos hoy en día, incluyendo los Yoga Sutras de Patanjali, que definen el camino del yoga en ocho pasos.
    En el siglo XIX y principios del siglo XX, el yoga comenzó a ganar popularidad en Occidente, gracias a la influencia de maestros hindúes como Swami Vivekananda y Swami Sivananda, quienes introdujeron las enseñanzas del yoga en Europa y América del Norte.
    Hoy en día, el yoga es practicado por millones de personas en todo el mundo, tanto como una forma de ejercicio físico como una herramienta para el crecimiento espiritual y el bienestar mental." 
    benefitName1='Mejora la flexibilidad y la movilidad' 
    benefit1='El yoga incluye una variedad de posturas y estiramientos que ayudan a aumentar la flexibilidad y la movilidad en las articulaciones. Esto puede mejorar la postura, reducir el riesgo de lesiones y aumentar la amplitud de movimiento en el cuerpo.'
    benefitName2='Reduce el estrés y promueve la relajación' 
    benefit2='La práctica de yoga a menudo incluye técnicas de respiración profunda y meditación, que pueden ayudar a reducir los niveles de estrés y ansiedad. Al enfocarse en la respiración y en el momento presente, el yoga promueve la relajación y el equilibrio mental.' 
    benefitName3='Fortalece el cuerpo y mejora la salud' 
    benefit3='Aunque el yoga es conocido por su enfoque en la flexibilidad, también puede ser un ejercicio efectivo para fortalecer los músculos y mejorar la salud en general. Algunas posturas de yoga requieren sostener el peso del cuerpo, lo que ayuda a desarrollar fuerza muscular y resistencia. Además, el yoga puede tener beneficios para la salud cardiovascular, la función respiratoria y la circulación sanguínea.' 
    img1={yoga} 
    img2={yoga} />
}