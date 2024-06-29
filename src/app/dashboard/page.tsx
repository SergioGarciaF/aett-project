import { connectDB } from "@/utils/mongoose";
import Fighter from "@/models/Fighter";
import FightersCard from "@/components/fightersCard";

// Función asíncrona para cargar los luchadores desde la base de datos.
const loadFighters = async () => {
  try {
    // Conecta a la base de datos.
    await connectDB();
    // Realiza una consulta para obtener todos los documentos de la colección de luchadores.
    const fighters = await Fighter.find();
    // Devuelve la lista de luchadores.
    return fighters;
  } catch (error) {
    console.error('Error al cargar los luchadores:', error);
    throw error; // Propaga el error para manejarlo donde sea necesario
  }
}

// Componente de página principal que se renderiza de forma asíncrona.
const Page = async () => {
  try {
    // Carga los luchadores llamando a la función loadFighters.
    const fighters = await loadFighters();

    return (
      <div className="text-secondary flex flex-col justify-center items-center">
        {/* Mapea a través de la lista de luchadores y renderiza una tarjeta para cada uno */}
        {fighters.map(fighter => (
          // Renderiza el componente FightersCard pasando el luchador como prop y utilizando el ID del luchador como clave.
          <FightersCard fighter={fighter} key={fighter._id}/>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error en la página principal:', error);
    // Puedes manejar el error de renderización aquí, por ejemplo, mostrando un mensaje de error.
    return <div>Ocurrió un error al cargar los luchadores.</div>;
  }
}

export default Page;
