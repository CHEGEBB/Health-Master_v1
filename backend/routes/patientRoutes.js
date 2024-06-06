// routes/patientRoutes.js

const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Route to create a new patient
router.post('/patients', patientController.createPatient);

// Route to fetch patient data
router.get('/patient', patientController.getPatient);

// Route to update patient data
router.put('/patient', patientController.updatePatient);

module.exports = router;
