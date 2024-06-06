import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import './Medication.scss';
import { useDarkMode } from "../context/DarkModeContext"; 


const Medication = () => {
    const { isDarkMode } = useDarkMode();
    const [alarms, setAlarms] = useState([]);
    const [alarmTime, setAlarmTime] = useState('');
    const [alarmNote, setAlarmNote] = useState('');
    const [toDo, setToDo] = useState('');
    const [toDoList, setToDoList] = useState([]);
    const [medications, setMedications] = useState('');
    const [interactionResult, setInteractionResult] = useState(null);
    const [points, setPoints] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const [prescriptions, setPrescriptions] = useState([
        { id: 'A348', title: 'Prescription 1', createdBy: 'Dr. Jacob Ryan', date: '12/05/2016', disease: 'Fever' },
        { id: 'A645', title: 'Prescription 2', createdBy: 'Dr. Rajesh', date: '12/05/2016', disease: 'Cholera' },
        { id: 'A873', title: 'Prescription 3', createdBy: 'Dr. Jay Soni', date: '12/05/2016', disease: 'Jaundice' },
        { id: 'A927', title: 'Prescription 4', createdBy: 'Dr. John Deo', date: '12/05/2016', disease: 'Typhoid' },
        { id: 'A228', title: 'Prescription 5', createdBy: 'Dr. Megha Trivedi', date: '12/05/2016', disease: 'Malaria' },
        { id: 'A345', title: 'Prescription 6', createdBy: 'Dr. Sarah Smith', date: '12/05/2016', disease: 'Infection' },
        { id: 'A765', title: 'Prescription 7', createdBy: 'Dr. Jacob Ryan', date: '12/05/2016', disease: 'Fever' },
        { id: 'A125', title: 'Prescription 8', createdBy: 'Dr. Rajesh', date: '12/05/2016', disease: 'Cholera' },
    ]);

    const addAlarm = (e) => {
        e.preventDefault();
        if (alarmTime && alarmNote) {
            setAlarms([...alarms, { time: alarmTime, note: alarmNote }]);
            setAlarmTime('');
            setAlarmNote('');
        }
    };

    const addToDo = (e) => {
        e.preventDefault();
        if (toDo) {
            setToDoList([...toDoList, toDo]);
            setToDo('');
        }
    };

    const checkInteractions = (e) => {
        e.preventDefault();
        // Here you would integrate with an API to check for interactions
        // Mock result for demonstration
        const result = `Interactions found for: ${medications}`;
        setInteractionResult(result);
    };

    const options = {
        chart: {
            type: 'bar',
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10,
            },
        },
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June'],
        },
        legend: {
            position: 'top',
        },
        fill: {
            opacity: 1,
        },
    };

    const series = [
        {
            name: 'Medication Taken',
            data: [30, 40, 45, 50, 49, 60],
        },
        {
            name: 'Medication Missed',
            data: [10, 15, 12, 10, 12, 8],
        },
    ];

    const addPoints = () => {
        const newPoints = points + 10;
        setPoints(newPoints);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        if (newPoints >= 100) {
            alert('Congratulations! You have earned a free medical checkup.');
            setPoints(0);
        }
    };
    const [newPrescription, setNewPrescription] = useState({
        id: '',
        title: '',
        createdBy: '',
        date: '',
        disease: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPrescription((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const addPrescription = (e) => {
        e.preventDefault();
        if (newPrescription.id && newPrescription.title && newPrescription.createdBy && newPrescription.date && newPrescription.disease) {
            setPrescriptions([...prescriptions, newPrescription]);
            setNewPrescription({
                id: '',
                title: '',
                createdBy: '',
                date: '',
                disease: '',
            });
        }
    };
    const backStyles ={
        backgroundColor: isDarkMode ? '#09101A' : '#f5f5f5',
        color: isDarkMode ? '#fff' : '#000',
        padding : isDarkMode ? '15px' : '15px'
      }
    
    const weeklyStyles={
        backgroundColor: isDarkMode ? '#1B1B2F' : '#f0f8ff',
        color: isDarkMode ? '#fff' : '#000'
    }
    const headings = {
        color: isDarkMode ? '#fff' : '#000'
      }
      const iconstyles={
        backgroundColor: isDarkMode ? '#ccc' : '#c0c0c0',
        color: isDarkMode ? '#333' : '#000',
        fontFamily : isDarkMode ? 'cursive' : 'cursive',
        border : isDarkMode ? '1px solid #3cb371' : '1px solid #8470ff'
      }
      const successStyles={
        backgroundColor: isDarkMode ? '#00fa9a' : '#4CAF50',
        color: isDarkMode ? '#fff' : '#000',
        borderRadius:'8px'

      }
      const tableStyles={
        backgroundColor: isDarkMode ? '#4A69BD' : '#f0ffff',
        color: isDarkMode ? '#fff' : '#000',
        fontFamily : isDarkMode ? 'cursive' : 'cursive',
        border : isDarkMode ? '1px solid #3cb371' : '1px solid #8470ff'
      }
    
    return (
        <div className='medication' style={weeklyStyles}>
            <h1>Medication Management</h1>
            
            <div className='gamification'>
                <h2 style={headings}>Medication Adherence</h2>
                <div className='points-display'  style={backStyles}>
                    <h3>Health Master Points: {points}</h3>
                    <button className='earn-points' onClick={addPoints}>Take Medication</button>
                </div>
                {showSuccess    && (
                    <div className='success-message' style={successStyles}>
                        <p>Success! You've earned points.</p>
                        <span className='star'>⭐</span>
                    </div>
                )}
            </div>

            <div className='alarm-section' style={backStyles}>
                <h2>Set Medication Alarm</h2>
                <form onSubmit={addAlarm}>
                    <input
                        type='time'
                        value={alarmTime}
                        onChange={(e) => setAlarmTime(e.target.value)}
                        required
                    />
                    <input
                        type='text'
                        placeholder='Medication note'
                        value={alarmNote}
                        onChange={(e) => setAlarmNote(e.target.value)}
                        required
                    />
                    <button type='submit'>Set Alarm</button>
                </form>
                <div className='alarm-list'>
                    <h3>Set Alarms</h3>
                    <ul>
                        {alarms.map((alarm, index) => (
                            <li key={index}  style={iconstyles}>
                                <span>{alarm.time}</span> - <span>{alarm.note}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='todo-section' style={backStyles}>
                <h2>To-Do List for Medication</h2>
                <form onSubmit={addToDo}>
                    <input
                        type='text'
                        placeholder='Add a to-do'
                        value={toDo}
                        onChange={(e) => setToDo(e.target.value)}
                        required
                    />
                    <button type='submit'>Add To-Do</button>
                </form>
                <div className='todo-list'>
                    <h3>To-Do List</h3>
                    <ul >
                        {toDoList.map((item, index) => (
                            <li key={index}  style={iconstyles}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='interaction-section' style={backStyles}>
                <h2>Medication Interaction Checker</h2>
                <form onSubmit={checkInteractions}>
                    <input
                        type='text'
                        placeholder='Enter medications'
                        value={medications}
                        onChange={(e) => setMedications(e.target.value)}
                        required
                    />
                    <button type='submit'>Check Interactions</button>
                </form>
                {interactionResult && (
                    <div className='interaction-result' style={backStyles}>
                        <h3>Interaction Results</h3>
                        <p>{interactionResult}</p>
                    </div>
                )}
            </div>

            <div className='chart-section' style={backStyles}>
                <h2>Medication Progress</h2>
                <ApexCharts options={options} series={series} type="bar" height={350} />
            </div>

            <table className='prescription-table' style={backStyles}>
                <thead>
                    <tr>
                        <th style={tableStyles} >#</th>
                        <th style={tableStyles}>Title</th>
                        <th style={tableStyles}>Created by</th>
                        <th style={tableStyles}>Date</th>
                        <th style={tableStyles}>Diseases</th>
                        <th style={tableStyles}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {prescriptions.map((prescription, index) => (
                        <tr key={prescription.id}>
                            <td>{prescription.id}</td>
                            <td>{prescription.title}</td>
                            <td>{prescription.createdBy}</td>
                            <td>{prescription.date}</td>
                            <td className={`disease ${prescription.disease.toLowerCase()}`}>{prescription.disease}</td>
                            <td className='actions'>
                                <button className='download' onClick={() => alert(`Downloading ${prescription.title}`)}>Download</button>
                                <button className='delete' onClick={() => alert(`Deleting ${prescription.title}`)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                
            <form onSubmit={addPrescription} style={weeklyStyles}>
            <div className="inputs">
                <input
                    type='text'
                    name='id'
                    placeholder='ID'
                    value={newPrescription.id}
                    onChange={handleChange}
                    required
                    style={backStyles}
                />
                <input
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={newPrescription.title}
                    onChange={handleChange}
                    required
                    style={backStyles}
                />
                <input
                    type='text'
                    name='createdBy'
                    placeholder='Created By'
                    value={newPrescription.createdBy}
                    onChange={handleChange}
                    required
                    style={backStyles}
                />
                <input
                    type='date'
                    name='date'
                    value={newPrescription.date}
                    onChange={handleChange}
                    required
                    style={backStyles}
                />
                <input
                    type='text'
                    name='disease'
                    placeholder='Disease'
                    value={newPrescription.disease}
                    onChange={handleChange}
                    required
                    style={backStyles}
                />
                </div>
                <div className="buttons">
                <button type='submit'>Add</button>
                </div>
              
            </form>
            

        </div>
    );
}

export default Medication;
