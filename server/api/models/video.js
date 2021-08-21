'use strict';
// Import mongoose
const mongoose = require("mongoose");

// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const VideoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    categoria: {
        type: [String],
        enum:['Acao', 'Animacao', 'Comedia', 'Policial', 'Documentario', 'Drama', 'Ficcao Cientifica', 'Terror', 'Familia', 'Romance'],
        required: true
    },
    image: {
        type: String,
        required: true
    },
});

// create and export model
module.exports = mongoose.model("video", VideoSchema);