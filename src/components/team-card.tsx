import React from 'react';
import Image from 'next/image';
import { TrainersInterface } from '@/lib/data';

const TeamCard = ({ img, name, description, speciality1, speciality2, speciality3, achievement1, achievement2, achievement3 }: TrainersInterface) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image className="w-full h-48 object-cover object-center" src={img} alt={name} />
            <div className="p-4">
                <h2 className="text-xl mb-2">{name}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="mb-4">
                    <h3 className="text-lg underline mb-2">Disciplinas</h3>
                    <ul className="pl-5">
                        <li className="mb-1">{speciality1}</li>
                        <li className="mb-1">{speciality2}</li>
                        <li className="mb-1">{speciality3}</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg underline mb-2">Logros</h3>
                    <ul className="pl-5">
                        <li className="mb-1">{achievement1}</li>
                        <li className="mb-1">{achievement2}</li>
                        <li className="mb-1">{achievement3}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
