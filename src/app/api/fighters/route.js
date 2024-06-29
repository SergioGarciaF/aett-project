import { NextResponse } from "next/server";
import { connectDB } from "../../../utils/mongoose"
import Fighter from "../../../models/Fighter";

//Obtener BD
export async function GET() {
    connectDB()
    const fighters = await Fighter.find()
    return NextResponse.json(fighters)
}

//Crear elemento en la BD
export async function POST(request) {

    try {
        const data = await request.json()
        const newFighter = new Fighter(data)
        const savedFighter = await newFighter.save()
        console.log(savedFighter)
        return NextResponse.json(savedFighter)
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
    
}

