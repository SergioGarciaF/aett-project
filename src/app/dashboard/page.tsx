import { connectDB } from "@/utils/mongoose";
import Fighter from "@/models/Fighter";
import FightersCard from "@/components/fightersCard";

const loadFighters = async () => {
  try {
    await connectDB();
    const fighters = await Fighter.find();
    return fighters;
  } catch (error) {
    console.error('Error al cargar los luchadores:', error);
    throw error;
  }
}

const Page = async () => {
  try {
    const fighters = await loadFighters();
    return (
      <div className="text-secondary flex flex-col justify-center items-center">
        {fighters.map(fighter => (
          <FightersCard fighter={fighter} key={fighter._id} />
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error en la página principal:', error);
    return <div>Ocurrió un error al cargar los luchadores.</div>;
  }
}

export default Page;
