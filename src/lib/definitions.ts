import { StaticImageData } from "next/image";


//Datos de ventajas
export interface AdvantagesInterface {
    id: number;
    icon: React.ReactNode; // Cambiado LucideIcon a React.ReactNode
    title: string;
    text: string;
};

//Datos de disciplinas
export interface DisciplinePropsInterface {
    name: string;
    kcal: number;
    duration: number;
    history: string;
    benefitName1:string;
    benefitName2:string;
    benefitName3:string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    img1: StaticImageData;
    img2: StaticImageData;
  };

//Datos de deportes
export interface SportsInterface {
    id: number,
    name: string,
    description: string,
    img: StaticImageData
}[];

//Datos de entrenadores
export interface TrainersInterface {
    img: StaticImageData;
    name: string,
    description: string,
    speciality1: string,
    speciality2?: string,
    speciality3?: string,
    achievement1?: string,
    achievement2?: string,
    achievement3?: string
}[];

//Datos de pricing

export interface PricingInterface {
    name: string,
    price: number,
}

export interface ScheduleInterface {
    img: StaticImageData;
    name: string,
    day1: string,
    day2?: string,
    day3?: string,
    day4?: string,
    day5?: string,
    morning?: string,
    evening?: string,
    night?: string,
}

//Datos de DB luchadores

export interface FightersInterface {
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
  


