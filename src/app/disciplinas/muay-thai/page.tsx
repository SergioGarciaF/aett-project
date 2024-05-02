import Disciplines from "@/components/disciplines";
import boxeo from '@/assets/boxeo.jpeg'

export default function Page() {
    return <Disciplines 
    name='Boxeo' 
    kcal={750} 
    duration={120} 
    history="El Muay Thai, también conocido como el arte marcial tailandés, tiene una historia rica y arraigada en la cultura de Tailandia. Se cree que sus orígenes se remontan a varios siglos atrás, donde se desarrolló como una forma de combate cuerpo a cuerpo para los antiguos guerreros tailandeses. Inicialmente practicado en campos de batalla, el Muay Thai se convirtió en una parte integral de la formación militar y en un deporte popular entre la población tailandesa.

    A lo largo de los siglos, el Muay Thai evolucionó desde un arte marcial de supervivencia hasta un deporte altamente codificado y ritualizado. En el siglo XX, se introdujeron reglas formales y se establecieron técnicas específicas, como golpes con puños, codos, rodillas y piernas, que forman la base del Muay Thai moderno.
    
    Hoy en día, el Muay Thai es conocido en todo el mundo como un deporte de combate dinámico y desafiante, que combina la fuerza física con la técnica refinada. Además de su popularidad como deporte de competición, el Muay Thai sigue siendo una parte importante de la cultura tailandesa, con rituales tradicionales y ceremonias que se mantienen vivas en los gimnasios y en los eventos de combate." 
    benefitName1='Mejora la coordinación y el equilibrio' 
    benefit1='El Muay Thai implica una amplia gama de movimientos que requieren coordinación entre las manos, los pies y el cuerpo en general. Además, los ejercicios de entrenamiento específicos, como el trabajo de bolsa y la práctica de combinaciones, ayudan a mejorar el equilibrio y la coordinación motora fina.'
    benefitName2='Reduce el estrés y mejora la salud mental' 
    benefit2='El entrenamiento en Muay Thai puede ser una excelente manera de liberar el estrés acumulado. El enfoque necesario para dominar las técnicas y el esfuerzo físico involucrado en los entrenamientos proporcionan una vía para despejar la mente y reducir la ansiedad, promoviendo así una mejor salud mental y bienestar emocional.' 
    benefitName3='Fomenta la camaradería y el trabajo en equipo' 
    benefit3='El Muay Thai se practica típicamente en un entorno de grupo, ya sea en clases de gimnasio o en un campamento de entrenamiento. Esto crea un sentido de comunidad y camaradería entre los practicantes, ya que trabajan juntos para mejorar y apoyarse mutuamente en su viaje de aprendizaje y crecimiento personal.' 
    img1={boxeo} 
    img2={boxeo} />
}