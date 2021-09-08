'use strict';
// Import mongoose
const mongoose = require("mongoose");

// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const SessionSchema = new Schema({
    expires: {
        type: Date,
        required: true
    },
    session: {
        type: String,
        required: true
    },
});

// create and export model
module.exports = mongoose.model("session", SessionSchema);