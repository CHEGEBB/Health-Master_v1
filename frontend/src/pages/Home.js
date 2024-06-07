import React, { useEffect, useState, useRef } from "react";
import "./Home.scss";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
} from "chart.js";
import Heartcon from "../images/heart-rate.png";
import Bloodcon from "../images/blood-pressure.png";
import Notificationicon from "../images/icons/ic--baseline-notifications.svg";
import SearchIcon from "../images/icons/fluent--search-48-filled (1).svg";
import Remindericon from "../images/icons/hugeicons--apple-reminder.svg";
import ProfilePic from "../images/brian.jpeg";
import WelcomImage from "../images/welcome.png";
import Bloodcountcon from "../images/blood-count.png";
import Glucosecon from "../images/glucose.png";
import CaraImage from "../images/cara.jpg";
import Liu from "../images/liu.jpg";
import Ming from "../images/ming.jpg";
import smith from "../images/smith.jpg";
import jethro from "../images/jethro.png";
import CountUp from "react-countup";
import appcon from "../images/icons/appointment.svg";
import hccon from "../images/icons/cost.svg";
import occon from "../images/icons/online.svg";
import pcon from "../images/icons/pending.svg";
import { useDarkMode } from "../context/DarkModeContext"; 
import medcon1 from "../images/icons/bi--capsule-pill.svg";
import medcon2 from "../images/icons/bxs--injection.svg";
import medcon3 from "../images/icons/fa6-solid--capsules.svg";
import medcon4 from "../images/icons/fa6-solid--tablets (1).svg";
import medcon5 from "../images/icons/fa6-solid--tablets.svg";
import doc1 from '../images/icons/docs/ant-design--file-zip-filled.svg';
import doc2 from '../images/icons/docs/fluent--document-link-20-filled.svg';
import doc3 from '../images/icons/docs/fluent--document-pdf-20-filled.svg';
import doc4 from '../images/icons/docs/healthicons--i-documents-denied.svg';
import doc5 from '../images/icons/docs/icons8--document.svg';
import doc6 from '../images/icons/docs/line-md--clipboard-list.svg';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const generateRandomHeartRate = () =>
  Math.floor(Math.random() * (120 - 60 + 1) + 60);
const generateRandomBloodPressure = () => ({
  systolic: Math.floor(Math.random() * (150 - 90 + 1) + 90),
  diastolic: Math.floor(Math.random() * (90 - 60 + 1) + 60)
});
const Homepage = () => {
  const { isDarkMode } = useDarkMode();
  const [notificationCount, setNotificationCount] = useState(5);
  const [reminderCount, setReminderCount] = useState(3); 
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [heartRateData, setHeartRateData] = useState([
    { x: 0, y: generateRandomHeartRate() }
  ]);
  const [bloodPressureData, setBloodPressureData] = useState(
    generateRandomBloodPressure()
  );
  const chartRef = useRef(null);
  let xValue = useRef(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRateData((prevData) => {
        const newData = [
          ...prevData,
          { x: xValue.current, y: generateRandomHeartRate() }
        ];
        xValue.current += 1;
        if (chartRef.current) {
          chartRef.current.update("quiet");
        }
        return newData;
      });
      setBloodPressureData(generateRandomBloodPressure());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const heartRateChartData = {
    datasets: [
      {
        label: "Heart Rate",
        data: heartRateData,
        fill: false,
        borderColor: "#db7093",
        tension: 0.1
      }
    ]
  };

  const bloodPressureChartData = {
    labels: ["Systolic", "Diastolic"],
    datasets: [
      {
        label: "Blood Pressure",
        data: [bloodPressureData.systolic, bloodPressureData.diastolic],
        backgroundColor: ["#ff1493", "#4169e1"]
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        min:
          heartRateData.length > 20
            ? heartRateData[heartRateData.length - 20].x
            : 0,
        max:
          heartRateData.length > 20
            ? heartRateData[heartRateData.length - 1].x
            : 20,
        grid: {
          display: false
        },
        ticks: {
          stepSize: 1,
          color: "#555"
        }
      },
      y: {
        min: 50,
        max: 130,
        ticks: {
          color: "#555"
        }
      }
    },
    animation: {
      duration: 1000
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true
      }
    }
  };
  const appointments = [
    {
      imgSrc: CaraImage,
      doctorName: "Dr. Cara",
      profession: "Radiologist",
      date: "12 June '20",
      time: "09:00-10:00",
      treatment: "CT scans",
      contactNumber: "+123 676545655",
      isFulfilled: false
    },
    {
      imgSrc: Liu,
      doctorName: "Dr. Jane",
      profession: "Cardiologist",
      date: "13 June '20",
      time: "11:00-11:30",
      treatment: "Heart checkup",
      contactNumber: "+123 434656764",
      isFulfilled: false
    },
    {
      imgSrc: Ming,
      doctorName: "Dr. Ming",
      profession: "Dermatologist",
      date: "14 June '20",
      time: "10:30-11:00",
      treatment: "Skin checkup",
      contactNumber: "+123 434656764",
      isFulfilled: false
    },
    {
      imgSrc: smith,
      doctorName: "Dr. Smith",
      profession: "Neurologist",
      date: "15 June '20",
      time: "11:00-11:30",
      treatment: "Brain checkup",
      contactNumber: "+123 434656764",
      isFulfilled: false
    },
    {
      imgSrc: jethro,
      doctorName: "Dr. Jethro",
      profession: "Gynecologist",
      date: "16 June '20",
      time: "11:00-11:30",
      treatment: "Prostate checkup",
      contactNumber: "+123 434656764",
      isFulfilled: false
    }

  ];
  const headerStyles = {
    backgroundColor: isDarkMode ? '#09101A' : '#f5f5f5', 
    color: isDarkMode ? '#fff' : '#000'
  
  };
  const iconStyles = {
    filter: isDarkMode ? 'invert(1)' : 'invert(0)'
  };
  const homepageStyles ={
    backgroundColor: isDarkMode ? '#09101A' : '#f5f5f5',
    color: isDarkMode ? '#fff' : '#000'
  }


const healthStatsStyles = {
  backgroundColor: isDarkMode ? '#09101A' : '#f0f8ff', 
  color: isDarkMode ? '#fff' : '#000'
}
const upcomingAppointmentsStyles = {
  backgroundColor: isDarkMode ? '#09101A' : '#f0f8ff',
  color: isDarkMode ? '#fff' : '#000'
}
const headings = {
  color: isDarkMode ? '#fff' : '#000'
}

const rateStyles={
  backgroundColor: isDarkMode ? '#0D1B2A' : '#f0f8ff',
  color: isDarkMode ? '#fff' : '#000'
}

const handleDeleteReport = (report) => {
  console.log(`Deleting report: ${report}`);
}
const notifications = [
  {
    type: "Appointment",
    time: "10:00 AM",
    date: "2024-06-10",
    doctor: "Dr. Smith",
    location: "Healthcare Center"
  },
  {
    type: "Medication Reminder",
    time: "12:00 PM",
    date: "2024-06-11",
    medication: "Aspirin",
    dosage: "1 tablet"
  }
];

const reminders = [
  {
    type: "Health Checkup",
    time: "08:00 AM",
    date: "2024-06-12",
    location: "Hospital"
  },
  {
    type: "Medication Reminder",
    time: "10:00 AM",
    date: "2024-06-13",
    medication: "Antibiotics",
    dosage: "2 capsules"
  }
];

const handleNotificationClick = () => {
  setIsPopupOpen(true);
};

const handleReminderClick = () => {
  setIsPopupOpen(true);
};

const handleClosePopup = () => {
  setIsPopupOpen(false);
};

useEffect(() => {
  const timer = setTimeout(() => {
    alert("Kindly Access The details page and fill you patient details😊 ");
  }, 2000);
  return () => clearTimeout(timer);
}, []);
  return (
    <div className="homepage" style={homepageStyles}>
          <header style={headerStyles}>
        <div className="search-bar">
          <img src={SearchIcon} alt="Search" style={iconStyles} />
          <input type="text" name="search" placeholder="Search"/>
        </div>
        <div className="notifications" onClick={handleNotificationClick}>
          {notificationCount > 0 && (
            <div className="notification-count">{notificationCount}</div>
          )}
          <img src={Notificationicon} alt="Notifications" />
        </div>
        <div className="reminders" onClick={handleReminderClick}>
          {reminderCount > 0 && (
            <div className="reminder-count">{reminderCount}</div>
          )}
          <img src={Remindericon} alt="Reminders" />
        </div>
        <div className="profile">
          <img className="profile-pic" src={ProfilePic} alt="Profile" />
          <div className="profile-info">
            <span className="profile-name">John Doe</span>
            <span className="profile-email">john.doe@example.com</span>
          </div>
        </div>
      </header>
      <div className="main">
        <div className="quick-actions">
          <div className="welcome-message" style={rateStyles}>
            <div className="img">
              <img src={WelcomImage} alt="Welcome" />
            </div>
            <div className="content">
              <h1 style={headings}>Welcome back, John Doe!</h1>
              <p style={headings}>
                We would like to take this opportunity to welcome you to our
                practice and to thank you for choosing our physicians to
                participate in your healthcare. We look forward to providing you
                with personalized, comprehensive health care focusing on
                wellness and prevention.
              </p>
            </div>
          </div>
          <div className="facts">
            <div className="appointments-fact">
              <div className="apcon">
                <img src={appcon} alt="Appointments" />
              </div>
              <div className="appointment-info">
                <h2>20</h2>
                <h3>Appointments</h3>
              </div>
            </div>
            <div className="health-costs">
              <div className="hccon">
                <img src={hccon} alt="Health Costs" />
              </div>

              <div className="health-costs-info">
                <h2>$2000</h2>
                <h3>Health Costs</h3>
              </div>
            </div>
            <div className="online-consultancy">
              <div className="occon">
                <img src={occon} alt="Online Consultancy" />
              </div>
              <div className="online-consultancy-info">
                <h2>20</h2>
                <h3>Online Consultancy</h3>
              </div>
            </div>
            <div className="pending">
              <div className="pcon">
                <img src={pcon} alt ="Pending" />
              </div>
              <div className="pending-info">
                <h2>10</h2>
                <h3>Pending</h3>
              </div>
            </div>
          </div>
          <div className="health-stats" style={healthStatsStyles}>
            <h2 style={headings}>My Health Stats</h2>
            <div className="stats">
              <div className="heart-rate" style={rateStyles}>
                <div className="heartRate">
                  <div className="rate">
                    <h4 style={headings}>Heart Rate</h4>
                  </div>
                  <div className="heartcon">
                    <img src={Heartcon} alt="Heart Rate" />
                  </div>
                </div>
                <div className="heart-rate-value">
                  <p>{heartRateData[heartRateData.length - 1].y}/118</p>
                </div>
                <div className="graph-for-heartrate">
                  <Line
                    ref={chartRef}
                    data={heartRateChartData}
                    options={options}
                  />
                </div>
              </div>
              <div className="blood-pressure" style={rateStyles}>
                <h4 style={headings}>Blood Pressure</h4>
                <div className="bloodcon">
                  <img src={Bloodcon} alt="Blood Pressure" />
                </div>
                <div className="blood-pressure-value">
                  <p>
                    {bloodPressureData.systolic}/{bloodPressureData.diastolic}
                  </p>
                </div>
                <div className="graph-for-blood-pressure">
                  <Bar data={bloodPressureChartData} />
                </div>
              </div>
              <div className="diagnosis-stats">
  <div className="blood-count" style={rateStyles}>
    <div className="blood-count-icon">
      <img src={Bloodcountcon} alt="Blood Count" />
    </div>
    <div className="count">
      <h4 style={headings}>Blood Count</h4>
      <div className="blood-count-value">
        <CountUp end={9455} duration={10} />/ml
        <span className="arrow up"></span>
      </div>
    </div>
  </div>
  <div className="glucose-level" style={rateStyles}>
    <div className="glucose-level-icon">
      <img src={Glucosecon} alt="Glucose Level" />
    </div>
    <div className="level">
      <h4 style={headings}>Glucose Level</h4>
      <div className="glucose-level-value">
        <CountUp end={120} duration={10} />mg/dL
        <span className="arrow down"></span>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
          <div className="upcoming-appointments" style={upcomingAppointmentsStyles}>
            <h2 style={headings}>Upcoming Appointments</h2>
            <div className="appointments-list">
              {appointments.map((appointment, index) => (
                <div key={index} className="appointment" style={rateStyles}>
                  <img src={appointment.imgSrc} alt={appointment.doctorName} />
                  <div className="details">
                    <div className="doctor-info">
                      <h3>{appointment.doctorName}</h3>
                      <p>{appointment.profession}</p>
                    </div>
                    <div className="appointment-info">
                      <p>
                        <strong style={headings}>Date:</strong> {appointment.date}
                      </p>
                      <p>
                        <strong style={headings}>Time:</strong> {appointment.time}
                      </p>
                      <p>
                        <strong style={headings}>Treatment:</strong> {appointment.treatment}
                      </p>
                      <p>
                        <strong style={headings}>Contact Number:</strong>{" "}
                        {appointment.contactNumber}
                      </p>
                    </div>
                    <div className="appointment-status">
                      <label>
                        <input
                          type="radio"
                          name={`appointment-${index}`}
                          value="fulfilled"
                          checked={appointment.isFulfilled}
                        />
                        Fulfilled
                      </label>
                      <label>
                        <input
                          type="radio"
                          // to make the radio buttons square
                          style={{ width: "20px", height: "20px" }}
                          name={`appointment-${index}`}
                          value="not-fulfilled"
                          checked={!appointment.isFulfilled}
                        />
                        Not Fulfilled
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="important-info" style={homepageStyles}>
          <div className="medications" style={rateStyles}>
          <h2 style={headings}>Medications</h2>
    <div className="medicine">
        <div className="medcon">
          <img src={medcon2} alt="Medications" />
        </div>
        <div className="med-info">
            <p>Sermorelin (injectable)</p>
        </div>
        <div className="duration">
            <p>Daily</p>
        </div>
    </div>
    
    <div className="medicine">
        <div className="medcon">
        <img src={medcon1} alt="Medications" />
        </div>
        <div className="med-info">
            <p>Econochlor (chloramphenicol-oral)</p>
        </div>
        <div className="duration">
            <p>1 - 0 - 1</p>
        </div>
    </div>
    
    <div className="medicine">
        <div className="medcon">
        <img src={medcon3} alt="Medications" />

        </div>
        <div className="med-info">
            <p>Desmopressin (tabs)</p>
        </div>
        <div className="duration">
            <p>1 - 1 - 1</p>
        </div>
    </div>
    
    <div className="medicine">
        <div className="medcon">
        <img src={medcon2} alt="Medications" />
        </div>
        <div className="med-info">
            <p>Abciximab (injection)</p>
        </div>
        <div className="duration">
            <p>1 Daily</p>
        </div>
    </div>
    
    <div className="medicine">
        <div className="medcon">
        <img src={medcon4} alt="Medications" />

        </div>
        <div className="med-info">
            <p>Kevzara (sarilumab)</p>
        </div>
        <div className="duration">
            <p>0 - 0 - 1</p>
        </div>
    </div>
    
    <div className="medicine">
        <div className="medcon">
        <img src={medcon5} alt="Medications" />

        </div>
        <div className="med-info">
            <p>Gentamicin (topical)</p>
        </div>
        <div className="duration">
            <p>1 - 0 - 1</p>
        </div>
    </div>
    
    <div className="medicine">
        <div className="medcon">
        <img src={medcon2} alt="Medications" />
        </div>
        <div className="med-info">
            <p>Paliperidone palmitate (injectable)</p>
        </div>
        <div className="duration">
            <p>1 - 1 - 1</p>
        </div>
    </div>
</div>
<div className="reports-documents" style={rateStyles}>
    <h2 style={headings}>Reports & Documents</h2>
    <div className="report">
      <div className="report-icon">
        <img src={doc6} alt="Reports & Documents" />
      </div>
      <div className="report-info">
        <p>Doctor's Report</p>
      </div>
      <div className="delete">
            <button onClick={handleDeleteReport}>Delete</button>
        </div>
        <div className="download">
        <button>Download</button>
        </div>
    </div>
    <div className="report">
        <div className="report-icon">
            <img src={doc1} alt="Reports & Documents" />
        </div>
        <div className="report-info">
            <p>CT Scan</p>
        </div>
        <div className="delete">
            <button onClick={handleDeleteReport}>Delete</button>
        </div>
        <div className="download">
        <button>Download</button>
        </div>
    </div>
    <div className="report">
        <div className="report-icon">
            <img src={doc2} alt="Reports & Documents" />
        </div>
        <div className="report-info">
            <p>MRI Scan</p>
        </div>
        <div className="delete">
            <button>Delete</button>
        </div>
        <div className="download">
        <button>Download</button>
        </div>
    </div>
    <div className="report">
        <div className="report-icon">
            <img src={doc3} alt="Reports & Documents" />
        </div>
        <div className="report-info">
            <p>Ultrasound</p>
        </div>
        <div className="delete">
            <button>Delete</button>
        </div>
        <div className="download">
        <button>Download</button>
        </div>
    </div>
    <div className="report">
        <div className="report-icon">
            <img src={doc4} alt="Reports & Documents" />
        </div>
        <div className="report-info">
            <p>ECG</p>
        </div>
        <div className="delete">
            <button>Delete</button>
        </div>
        <div className="download">
        <button>Download</button>
        </div>
    </div>
    <div className="report">
        <div className="report-icon">
            <img src={doc5} alt="Reports & Documents" />
        </div>
        <div className="report-info">
            <p>X-Ray</p>
        </div>
        <div className="delete">
            <button>Delete</button>
        </div>
        <div className="download">
        <button>Download</button>
        </div>
    </div>
</div>

          </div>
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h3>Notifications</h3>
            <ul>
              {notifications.map((notification, index) => (
                <li key={index}>
                  <strong>{notification.type}</strong> - {notification.time}, {notification.date}
                  {notification.doctor && (
                    <div>
                      Doctor: {notification.doctor}, Location: {notification.location}
                    </div>
                  )}
                  {notification.medication && (
                    <div>
                      Medication: {notification.medication}, Dosage: {notification.dosage}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <h3>Reminders</h3>
            <ul>
              {reminders.map((reminder, index) => (
                <li key={index}>
                  <strong>{reminder.type}</strong> - {reminder.time}, {reminder.date}
                  {reminder.location && (
                    <div>
                      Location: {reminder.location}
                    </div>
                  )}
                  {reminder.medication && (
                    <div>
                      Medication: {reminder.medication}, Dosage: {reminder.dosage}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
