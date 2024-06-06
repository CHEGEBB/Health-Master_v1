import React from 'react';
import './UserProfile.scss';
import Doctor1 from '../images/2(2).jpg';
import Doctor2 from '../images/3(1).jpg';
import Doctor3 from '../images/5.jpg';
import Doctor4 from '../images/1(2).jpg';
import user from "../images/smith.jpg";
import downloadIcon from '../images/icons/docs/line-md--arrow-align-bottom.svg';
import { useDarkMode } from "../context/DarkModeContext"; 

const Profile = () => {
  const patientHistory = [
    {
      dateOfVisit: '02/06/24',
      diagnosis: 'Malaria',
      severity: 'High',
      totalVisits: 3,
      status: 'Under Treatment',
      documents: 'path/to/document1.pdf'
    },
    {
      dateOfVisit: '01/05/24',
      diagnosis: 'Flu',
      severity: 'Low',
      totalVisits: 1,
      status: 'Recovered',
      documents: 'path/to/document2.pdf'
    }
  ];
  const { isDarkMode } = useDarkMode();

  const backStyles ={
    backgroundColor: isDarkMode ? '#09101A' : '#f5f5f5',
    color: isDarkMode ? '#fff' : '#000'
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
    color: isDarkMode ? '#fff' : '#000'
  }


  return (
    <div className="profile-container">
      <div className="personal-details" style={weeklyStyles}>
        <div className="person" style={backStyles}>
          <div className="bg"></div>
          <div className="profile-pic">
            <img
              src={user}
              alt="Avatar"
              className="avatar"
            />
          </div>
          <div className="person-name">
            <h1>John Doe</h1>
          </div>
          <div className="person-email">

            <p>john.doe@example.com</p>
          </div>
          <div className="edit">
            <button>Edit Profile</button>
          </div>
        </div>
        <div className="private-details">
          <div className="details">
            <div className="row1">
              <div className="detail">
                <h3 style={headings}>Sex</h3>
                <p style={headings}>Male</p>
              </div>
              <div className="detail">
                <h3 style={headings}>Age</h3>
                <p style={headings}>24</p>
              </div>
              <div className="detail">
                <h3 style={headings}>Blood Group</h3>
                <p style={headings}>AB+</p>
              </div>
              <div className="detail">
                <h3 style={headings}>Marital Status</h3>
                <p style={headings}>Single</p>
              </div>
            </div>
            <div className="row2">
              <div className="detail">
                <h3 style={headings}>Status</h3>
                <p style={headings}>Active</p>
              </div>
              <div className="detail">
                <h3 style={headings}>Date of Birth</h3>
                <p style={headings}>01/01/2000</p>
              </div>
              <div className="detail">
                <h3 style={headings}>Height</h3>
                <p style={headings}>170cm</p>
              </div>
              <div className="detail">
                <h3 style={headings}>Weight</h3>
                <p style={headings}>70kg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="other-details">
        <div className="patient-details" style={backStyles}> 
          <h2 style={headings}>My Health Stats</h2>
          <div className="detail" style={weeklyStyles}>
            <div className="detail-content">
              <div className="det">
                <h3 style={headings}>Blood Type</h3>
              </div>
              <div className="val">
                <p style={headings}>AB+</p>
              </div>
            </div>
          </div>
          <div className="detail" style={weeklyStyles}>
            <div className="detail-content">
              <div className="det">
                <h3 style={headings}>Allergies</h3>
              </div>
              <div className="val">
                <p style={headings}>Penicillin, peanuts</p>
              </div>
            </div>
          </div>
          <div className="detail" style={weeklyStyles}>
            <div className="detail-content">
              <div className="det">
                <h3 style={headings}>Diseases</h3>
              </div>
              <div className="val">
                <p style={headings}>Diabetes</p>
              </div>
            </div>
          </div>
          <div className="detail" style={weeklyStyles}>
            <div className="detail-content">
              <div className="det">
                <h3 style={headings}>Pressure</h3>
              </div>
              <div className="val">
                <p style={headings}>130/80 mmHG</p>
              </div>
            </div>
          </div>
          <div className="detail" style={weeklyStyles}>
            <div className="detail-content">
              <div className="det">
                <h3 style={headings}>Blood Pressure</h3>
              </div>
              <div className="val">
                <p style={headings}>120/80 mmHG</p>
              </div>
            </div>
          </div>
        </div>
        <div className="check-ups" style={weeklyStyles}>
          <h2 style={headings}>My Doctors</h2>
          <div className="check-up" style={backStyles}>
            <img src={Doctor1} alt="Dr Chealsea Green" className="doctor-photo" />
            <div className="doc">
              <h3 style={headings}>Dr Chealsea Green</h3>
              <p style={headings}>Dermatologist</p>
            </div>
            <button className="delete-button">Delete</button>
          </div>
          <div className="check-up" style={backStyles}>
            <img src={Doctor2} alt="Dr Jane Wright" className="doctor-photo" />
            <div className="doc">
              <h3 style={headings}>Dr Jane Wright</h3>
              <p style={headings}>Clinical Doctor</p>
            </div>
            <button className="delete-button">Delete</button>
          </div>
          <div className="check-up" style={backStyles}>
            <img src={Doctor3} alt="Dr Tom Melendez" className="doctor-photo" />
            <div className="doc">
              <h3 style={headings}>Dr Tom Melendez</h3>
              <p style={headings}>Dentist</p>
            </div>
            <button className="delete-button">Delete</button>
          </div>
          <div className="check-up" style={backStyles}>
            <img src={Doctor4} alt="Dr Riphat Jion" className="doctor-photo" />
            <div className="doc">
              <h3 style={headings}>Dr Riphat Jion</h3>
              <p style={headings}>Surgeon</p>
            </div>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      </div>
      <div className="patient-history" style={backStyles}>
          <h2>Patient History</h2>
          {patientHistory.map((item, index) => (
            <div className="history-item" key={index} style={weeklyStyles}>
              <div className="history-content">
                <div className="history-detail">
                  <h3 style={headings}>Date of Visit</h3>
                  <p style={headings}>{item.dateOfVisit}</p>
                </div>
                <div className="history-detail">
                  <h3 style={headings}>Diagnosis</h3>
                  <p style={headings}>{item.diagnosis}</p>
                </div>
                <div className="history-detail">
                  <h3 style={headings}>Severity</h3>
                  <p style={headings}>{item.severity}</p>
                </div>
                <div className="history-detail">
                  <h3  style={headings}>Total Visits</h3>
                  <p style={headings}>{item.totalVisits}</p>
                </div>
                <div className="history-detail">
                  <h3 style={headings}>Status</h3>
                  <p style={headings}>{item.status}</p>
                </div>
                <div className="history-detail">
                  <h3 style={headings}>Documents</h3>
                  <a href={item.documents} download>
                    <img src={downloadIcon} alt="Download" className="download-icon" style={iconstyles}/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Profile;
