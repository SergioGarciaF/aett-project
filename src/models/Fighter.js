import { Schema, model, models } from "mongoose";

const fighterSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Se requiere nombre'],
        unique: false,
        trim: true,
    },
    age: {
        type: Number,
        required: [true, 'Se requiere edad'],
        unique: false,
        trim: true,
    },
    gender: {
        type: String,
        required: [true, 'Se requiere genero'],
        unique: false,
        trim: true,
    },
    weight: {
        type: Number,
        required: [true, 'Se requiere peso'],
        unique: false,
        trim: true,
    },
    discipline: {  
        type: String,
        required: [true, 'Se requiere disciplina'],
        unique: false,
        trim: true,
    },
    category: {
        type: String,
        required: [true, 'Se requiere categoria'],
        unique: false,
        trim: true,
    },
    wins: {
        type: Number,
        required: [true, 'Se requiere victorias'],
        unique: false,
        trim: true,
    },
    draws: {
        type: Number,
        required: [true, 'Se requiere empates'],
        unique: false,
        trim: true,
    },
    defeats: {
        type: Number,
        required: [true, 'Se requiere derrotas'],
        unique: false,
        trim: true,
    }
}, {
    timestamps: true
});

export default models.Fighter || model('Fighter', fighterSchema);
