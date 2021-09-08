'use strict';
// Import mongoose
const mongoose = require("mongoose");

// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const ContaSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
});

// create and export model
module.exports = mongoose.model("conta", ContaSchema);