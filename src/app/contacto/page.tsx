"use client"

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';

import mma from '@/assets/mmaFighter.jpeg';

const ContactForm = () => {
    const [option, setOption] = useState('');
    const [activity, setActivity] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        let whatsappMessage = '';
        if (option === 'doubt' || option === 'information') {
            whatsappMessage = `Hola. ${message}.`; // Usar el mensaje ingresado en el textarea
        } else if (option === 'try-free-week') {
            whatsappMessage = `Quiero probar una semana gratis de ${activity} por la ${time}`; // Construir el mensaje para probar una semana gratis
        }

        // Construir la URL de WhatsApp
        const whatsappUrl = `https://api.whatsapp.com/send?phone=+34640678978&text=${encodeURIComponent(whatsappMessage)}`;

        // Abrir una nueva ventana con la URL de WhatsApp
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="flex">
            <Image src={mma} alt="mma" className="hidden md:block w-1/2" />
            <div className="bg-primary text-secondary flex flex-col justify-center items-center w-full min-h-screen md:w-1/2">
                <h1 className="text-6xl mb-4">Contacto</h1>
                <form onSubmit={handleSubmit} className="w-full max-w-sm">
                    <div className="py-5">
                        <label htmlFor="option" className="block text-2xl mb-5">
                            Selecciona una opción
                        </label>
                        <select
                            id="option"
                            name="option"
                            className="block w-full bg-primary text-secondary border-secondary rounded-md shadow-sm focus:ring-secondary focus:border-secondary sm:text-md"
                            value={option}
                            onChange={(e) => setOption(e.target.value)}
                            required
                        >
                            <option value="">Opción</option>
                            <option value="information">Información</option>
                            <option value="try-free-week">Probar una semana gratis</option>
                        </select>
                    </div>
                    {option === 'information' ? (
                        <div className="mb-4">
                            <label htmlFor="message" className="block pt-5 text-2xl font-medium text-secondary">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={8}
                                className="mt-5 block w-full border-gray-300 rounded-md shadow-sm p-5 text-primary focus:ring-secondary focus:border-secondary sm:text-lg"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                    ) : option === 'try-free-week' ? (
                        <>
                            <div className="mb-4">
                                <label htmlFor="activity" className="block pt-5 text-2xl text-secondary">
                                    Selecciona disciplina
                                </label>
                                <select
                                    id="activity"
                                    name="activity"
                                    className="block w-full mt-5 bg-primary text-secondary border-secondary rounded-md shadow-sm focus:ring-secondary focus:border-secondary sm:text-md"
                                    value={activity}
                                    onChange={(e) => setActivity(e.target.value)}
                                    required
                                >
                                    <option value="">Disciplina</option>
                                    <option value="mma">MMA</option>
                                    <option value="muay-thai">Muay Thai</option>
                                    <option value="yoga">Yoga</option>
                                    <option value="boxing">Boxing</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="time" className="block text-2xl font-medium text-gray-700">
                                    Selecciona turno
                                </label>
                                <select
                                    id="time"
                                    name="time"
                                    className="block w-full mt-5 bg-primary text-secondary border-secondary rounded-md shadow-sm focus:ring-secondary focus:border-secondary sm:text-md"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                >
                                    <option value="">Turno</option>
                                    <option value="mañana">Mañana</option>
                                    <option value="tarde">Tarde</option>
                                </select>
                            </div>
                        </>
                    ) : null}
                    <Button
                        type="submit"
                        className="border border-secondary sm:flex items-center justify-between gap-2 sm:gap-7 hover:bg-secondary hover:text-primary cursor-pointer text-md"
                    >
                        Enviar
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
