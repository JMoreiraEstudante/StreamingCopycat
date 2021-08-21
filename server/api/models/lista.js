'use strict';
// Import mongoose
const mongoose = require("mongoose");

// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const ListaSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    video: [{
        type: String,
        required: true
    }],
});

// create and export model
module.exports = mongoose.model("lista", ListaSchema);