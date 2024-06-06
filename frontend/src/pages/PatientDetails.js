import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import './PatientDetails.scss';

const UserDetails = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        sex: '',
        age: '',
        bloodgroup: '',
        maritalstatus: '',
        status: '',
        dob: '',
        height: '',
        weight: '',
        allergies: '',
        diseases: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        let timer;
        const unregisterAuthObserver = auth.onAuthStateChanged(user => {
            if (user) {
                timer = setTimeout(() => {
                    setShowForm(true);
                }, 2000);
            }
        });

        return () => {
            clearTimeout(timer);
            unregisterAuthObserver();
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://health-master-yz7z.onrender.com/api/patients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Form data submitted successfully');
                setSuccessMessage('Form data submitted successfully');
            } else {
                console.error('Error submitting form data:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form data:', error.message);
        }
    };

    return (

        <div className={`details ${showForm ? 'show-form' : ''}`}>
        <div className="success-message">
        {successMessage && <p className="success-message">{successMessage}</p>}

        </div>

            <h1>User Details</h1>
            <div className="section">
                <h2>Security Settings</h2>
                <div className="field1">
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div className="field2">
                    <label>Email:</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="sex1">
                    <label>Sex:</label>
                    <input type="text" name="sex" value={formData.sex} onChange={handleChange} />
                </div>
                <div className="age1">
                    <label>Age:</label>
                    <input type="text" name="age" value={formData.age} onChange={handleChange} />
                </div>
                <div className="bloodgroup1">
                    <label>Blood Group:</label>
                    <input type="text" name="bloodgroup" value={formData.bloodgroup} onChange={handleChange} />
                </div>
                <div className="marital-status1">
                    <label>Marital Status:</label>
                    <input type="text" name="maritalstatus" value={formData.maritalstatus} onChange={handleChange} />
                </div>
                <div className="status1">
                    <select name="status" value={formData.status} onChange={handleChange}>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <div className="dob1">
                    <label>Date of Birth:</label>
                    <input type="text" name="dob" value={formData.dob} onChange={handleChange} />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default UserDetails;
