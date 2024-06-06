// controllers/patientController.js

const Patient = require('../models/Patient');

// Fetch patient data
exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({ email: req.user.email });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patient data', error });
  }
};

// Update patient data
exports.updatePatient = async (req, res) => {
  try {
    const updatedPatient = await Patient.findOneAndUpdate(
      { email: req.user.email },
      req.body,
      { new: true }
    );
    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(500).json({ message: 'Error updating patient data', error });
  }
};

// Existing createPatient function
exports.createPatient = async (req, res) => {
  const patient = new Patient(req.body);
  try {
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ message: 'Error creating patient', error });
  }
};
