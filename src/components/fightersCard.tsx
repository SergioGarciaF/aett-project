"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

//Componente para mostrara elementos de la BD
const FightersCard = ({ fighter, onDelete }: any) => {
    const router = useRouter();

    //Función para eliminar elemento de la BD
    const handleDelete = async (id: string) => {
        const confirmed = window.confirm('¿Estás seguro de que deseas eliminar este luchador?');

        if (!confirmed) {
            return; // Si el usuario cancela, no hacer nada
        }

        try {
            const res = await fetch(`/api/fighters/${id}`, {
                method: 'DELETE'
            });

            if (!res.ok) {
                throw new Error('Error al eliminar el luchador');
            }

            if (res.status === 200) {
                alert('Eliminado');
                router.push("/dashboard");
                router.refresh();
            }

            onDelete(id); // Llama a la función onDelete pasada como prop para actualizar la lista
        } catch (error) {
            console.error('Error eliminando el luchador:', error);
        }
    };

    return (
        <div className='flex gap-4 my-2 border-y py-1 items-center w-full'>
            <h3 className='border-e px-2'>Nombre y apellidos: {fighter.name}</h3>
            <p className='border-e px-2'>Edad: {fighter.age}</p>
            <p className='border-e px-2'>Genero: {fighter.gender}</p>
            <p className='border-e px-2'>Peso: {fighter.weight}</p>
            <p className='border-e px-2'>Disciplina: {fighter.discipline}</p>
            <p className='border-e px-2'>Categoria: {fighter.category}</p>
            <p className='border-e px-2'>Victorias: {fighter.wins}</p>
            <p className='border-e px-2'>Empates: {fighter.draws}</p>
            <p className='border-e px-2'>Derrotas: {fighter.defeats}</p>
            
            {/* Botón que lleva a la eduición del elemento de la BD */}
            <Link href={`/dashboard/${fighter._id}`}>
                <button className='border rounded-lg p-1 border-secondary hover:bg-secondary hover:text-primary'>Editar</button>
            </Link>
            <button
                onClick={() => handleDelete(fighter._id)}
                className='border rounded-lg p-1 border-secondary hover:bg-secondary hover:text-primary'
            >
                Eliminar
            </button>
        </div>
    );
};

export default FightersCard;
