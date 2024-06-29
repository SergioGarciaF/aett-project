// Importa la función para conectar a la base de datos MongoDB desde el utilitario de mongoose.
import { connectDB } from "@/utils/mongoose";
// Importa el modelo de datos Fighter.
import Fighter from "@/models/Fighter";
// Importa el componente para mostrar la tarjeta de luchadores.
import FightersCard from "@/components/fightersCard";

// Función asíncrona para cargar los luchadores desde la base de datos.
const loadFighters = async () => {
  // Conecta a la base de datos.
  connectDB();
  // Realiza una consulta para obtener todos los documentos de la colección de luchadores.
  const fighters = await Fighter.find();
  // Devuelve la lista de luchadores.
  return fighters;
}

// Componente de página principal que se renderiza de forma asíncrona.
const Page = async () => {
  // Carga los luchadores llamando a la función loadFighters.
  const fighters = await loadFighters();

  return (
    <div className="text-secondary flex flex-col justify-center items-center">
      {/* Mapea a través de la lista de luchadores y renderiza una tarjeta para cada uno */}
      {fighters.map(fighter => {
        return (
          // Renderiza el componente FightersCard pasando el luchador como prop y utilizando el ID del luchador como clave.
          <FightersCard fighter={fighter} key={fighter._id}/>
        )
      })}
    </div>
  );
}

export default Page;
