'use client';

import React, { useContext, useState } from 'react'; 
import { useRouter } from 'next/navigation'; 
import { Context } from '../layout'; // Importa el contexto desde el archivo de layout.

const Formulario: React.FC = () => {
    // Define el estado inicial del nuevo luchador.
    const [newFighter, setNewFighter] = useState({
        name: '',
        age: '',
        gender: '',
        weight: '',
        discipline: '', 
        category: '',
        wins: '',
        draws: '',
        defeats: ''
    });

    const router = useRouter();
    const { state } = useContext(Context); // Accede al estado del contexto para verificar la autenticación.

    // Función para manejar los cambios en los campos del formulario.
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // Actualiza el estado del nuevo luchador con los valores del formulario.
        setNewFighter({
            ...newFighter,
            [e.target.name]: e.target.value
        });
        console.log('Valor de la disciplina:', e.target.value); 
    };

    // Función para manejar el envío del formulario.
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); 

        try {
            // Realiza una petición POST a la API para crear un nuevo luchador.
            const res = await fetch("http://localhost:3000/api/fighters", {
                method: "POST",
                body: JSON.stringify(newFighter), 
                headers: {
                    "Content-Type": "application/json" 
                }
            });
            const data = await res.json(); // Convierte la respuesta a JSON.

            // Si la respuesta es exitosa, navega al dashboard y refresca la página.
            if (res.status === 200) {
                router.push("/dashboard");
                router.refresh();
            }
        } catch (error) {
            console.log(error); // Maneja cualquier error durante la petición.
        }
    };

    // Si el usuario no está autenticado, redirige a la página de autenticación.
    if (!state.isAuthenticated) {
        router.push('/dashboard'); // Reemplaza con la ruta real de autenticación.
        return null; // Devuelve null para evitar renderizar el formulario.
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center text-secondary'>
                <h1 className='text-6xl text-secondary '>Agregar</h1>
                <div className="flex items-center justify-center bg-gray-100">
                    {/* Formulario para agregar un nuevo luchador */}
                    <form onSubmit={handleSubmit} className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-secondary">Nombre y apellidos</label>
                            <input type="text" id="name" name="name" value={newFighter.name} onChange={handleChange} className="text-primary mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm" required />
                        </div>
                        <div>
                            <label htmlFor="age" className="block text-sm font-medium text-secondary">Edad</label>
                            <input type="number" id="age" name="age" value={newFighter.age} onChange={handleChange} className="text-primary mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm" required />
                        </div>
                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium text-secondary">Género</label>
                            <select id="gender" name="gender" value={newFighter.gender} onChange={handleChange} className="mt-1 block w-full p-2 border-gray-300 text-primary rounded-md shadow-sm" required>
                                <option value="">Selecciona una opción</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="weight" className="block text-sm font-medium text-secondary">Peso</label>
                            <input type="number" id="weight" name="weight" value={newFighter.weight} onChange={handleChange} className="text-primary mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm" required />
                        </div>
                        <div>
                            <label htmlFor="discipline" className="block text-sm font-medium text-secondary">Disciplina</label>
                            <select id="discipline" name="discipline" value={newFighter.discipline} onChange={handleChange} className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm text-primary" required>
                                <option value="">Selecciona una opción</option>
                                <option value="MMA">MMA</option>
                                <option value="Boxeo">Boxeo</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-secondary">Categoría</label>
                            <select id="category" name="category" value={newFighter.category} onChange={handleChange} className="text-primary mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm" required>
                                <option value="">Selecciona una opción</option>
                                <option value="Amateur">Amateur</option>
                                <option value="Profesional">Profesional</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="wins" className="block text-sm font-medium text-secondary">Victorias</label>
                            <input type="number" id="wins" name="wins" value={newFighter.wins} onChange={handleChange} className="text-primary mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm" required />
                        </div>
                        <div>
                            <label htmlFor="draws" className="block text-sm font-medium text-secondary">Empates</label>
                            <input type="number" id="draws" name="draws" value={newFighter.draws} onChange={handleChange} className="text-primary mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm" required />
                        </div>
                        <div>
                            <label htmlFor="defeats" className="block text-sm font-medium text-secondary">Derrotas</label>
                            <input type="number" id="defeats" name="defeats" value={newFighter.defeats} onChange={handleChange} className="text-primary mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm" required />
                        </div>
                        <div className="md:col-span-2">
                            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Formulario; 
