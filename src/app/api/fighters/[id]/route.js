import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Fighter from "@/models/Fighter";


export async function GET(request, { params }) {
    try {
        connectDB()
        //Buscamos luchador por id
        const fighterFound = await Fighter.findById(params.id)
        //Si no encuentra al luchador devuelve mensaje de error
        if (!fighterFound) {
            return NextResponse.json({
                message: "Fighter not found",
            }, {
                status: 404
            })
        }
        return NextResponse.json(fighterFound)
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}

//Eliminar elemento de la BD
export async function DELETE(request, { params }) {
    try {
        const fighterDeleted = await Fighter.findByIdAndDelete(params.id)
        if (!fighterDeleted) {
            NextResponse.json({
                message: "Fighter not found",
                status: 404
            })
        }
        return NextResponse.json(fighterDeleted)

    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}

//Actualizar elemento de la BD
export async function PUT(request, { params }) {
    try {
        const data = await request.json()
        console.log(data)
        const fighterUpdated = await Fighter.findByIdAndUpdate(params.id, data, {
            new: true
        })
        return NextResponse.json(fighterUpdated)
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}