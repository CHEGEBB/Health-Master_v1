// models/Patient.js

const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: String,
    email: String,
    sex: String,
    age: Number,
    bloodGroup: String,
    maritalStatus: String,
    status: String,
    dob: Date,
    height: Number,
    weight: Number,
    allergies: [String],
    diseases: [String]
});

module.exports = mongoose.model('Patient', patientSchema);
