'use client';

import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react'; 
import { useRouter, useParams } from 'next/navigation'; 

interface Fighter {
    _id: string;
    name: string;
    age: number;
    gender: string;
    weight: number;
    discipline: string;
    category: string;
    wins: number;
    draws: number;
    defeats: number;
}


const Page: React.FC = () => {
    const router = useRouter(); // Hook para manejar la navegación.
    const { id } = useParams(); // Hook para obtener los parámetros de la URL.
    const [fighter, setFighter] = useState<Fighter | null>(null); // Estado para almacenar los datos del luchador.
    const [loading, setLoading] = useState(true); // Estado para controlar el indicador de carga.

    // useEffect se ejecuta cuando el componente se monta y cada vez que cambia 'id'.
    useEffect(() => {
        if (id) {
            const fetchFighter = async () => {
                try {
                    const res = await fetch(`/api/fighters/${id}`); // Hace una petición a la API para obtener los datos del luchador.
                    if (!res.ok) {
                        throw new Error('Error al cargar los datos del luchador');
                    }
                    const data = await res.json(); 

                    // Transforma los datos recibidos para asegurar que sean un objeto plano de tipo Fighter.
                    const transformedData: Fighter = {
                        _id: data._id.toString(),
                        name: data.name,
                        age: data.age,
                        gender: data.gender,
                        weight: data.weight,
                        discipline: data.discipline,
                        category: data.category,
                        wins: data.wins,
                        draws: data.draws,
                        defeats: data.defeats,
                    };

                    setFighter(transformedData); 
                    setLoading(false); 
                } catch (error) {
                    console.error(error); 
                    setLoading(false); 
                }
            };

            fetchFighter(); // Llama a la función para obtener los datos del luchador.
        }
    }, [id]); // Dependencia de 'id' para ejecutar useEffect cuando cambia.

    // Maneja los cambios en los campos del formulario.
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (fighter) {
            setFighter({
                ...fighter,
                [name]: name === 'age' || name === 'weight' || name === 'wins' || name === 'draws' || name === 'defeats' ? parseInt(value) : value,
            });
        }
    };

    // Maneja el envío del formulario.
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault(); 
        if (fighter) {
            try {
                const res = await fetch(`/api/fighters/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(fighter), // Envía los datos del luchador en el cuerpo de la petición.
                });

                if (!res.ok) {
                    throw new Error('Error al actualizar el luchador');
                }

                alert('Luchador actualizado correctamente'); // Alerta de éxito.
                router.push('/dashboard'); // Navega al dashboard.
                router.refresh(); // Refresca la página actual.
            } catch (error) {
                console.error('Error actualizando el luchador:', error); 
            }
        }
    };

    
    if (loading) {
        return <div>Cargando...</div>;
    }

  
    if (!fighter) {
        return <div>Error: Luchador no encontrado</div>;
    }

    // Renderiza el formulario de edición del luchador.
    return (
        <div className='flex flex-col justify-center items-center text-secondary'>
            <h1 className='text-6xl text-secondary '>Agregar</h1>
            <div className="flex items-center justify-center bg-gray-100">
                <form onSubmit={handleSubmit} className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-secondary">Nombre y apellidos</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={fighter.name}
                            onChange={handleChange}
                            className="text-primary mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-secondary">Edad</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={fighter.age}
                            onChange={handleChange}
                            className="text-primary mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-secondary">Género</label>
                        <select
                            id="gender"
                            name="gender"
                            value={fighter.gender}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border-gray-300 text-primary rounded-md shadow-sm"
                            required
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="weight" className="block text-sm font-medium text-secondary">Peso</label>
                        <input
                            type="number"
                            id="weight"
                            name="weight"
                            value={fighter.weight}
                            onChange={handleChange}
                            className="text-primary mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="discipline" className="block text-sm font-medium text-secondary">Disciplina</label>
                        <select
                            id="discipline"
                            name="discipline"
                            value={fighter.discipline}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm text-primary"
                            required
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="MMA">MMA</option>
                            <option value="Boxeo">Boxeo</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-secondary">Categoría</label>
                        <select
                            id="category"
                            name="category"
                            value={fighter.category}
                            onChange={handleChange}
                            className="text-primary mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
                            required
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="Amateur">Amateur</option>
                            <option value="Profesional">Profesional</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="wins" className="block text-sm font-medium text-secondary">Victorias</label>
                        <input
                            type="number"
                            id="wins"
                            name="wins"
                            value={fighter.wins}
                            onChange={handleChange}
                            className="text-primary mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="draws" className="block text-sm font-medium text-secondary">Empates</label>
                        <input
                            type="number"
                            id="draws"
                            name="draws"
                            value={fighter.draws}
                            onChange={handleChange}
                            className="text-primary mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="defeats" className="block text-sm font-medium text-secondary">Derrotas</label>
                        <input
                            type="number"
                            id="defeats"
                            name="defeats"
                            value={fighter.defeats}
                            onChange={handleChange}
                            className="text-primary mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div className="md:col-span-2">
                        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page; 
