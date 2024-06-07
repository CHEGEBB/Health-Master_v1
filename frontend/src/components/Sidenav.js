import React, { useState } from 'react';
import './Sidenav.scss';
import { Link } from 'react-router-dom';
import Dashcon from '../images/icons/ic--sharp-dashboard.svg';
import Profilecon from '../images/icons/iconamoon--profile-circle-fill.svg';
import HealthGoalcon from '../images/icons/mage--goals-fill.svg';
import Symptomcon from '../images/icons/icon-park-solid--check-one.svg';
import Medicationcon from '../images/icons/ic--outline-medication-liquid.svg';
import { useDarkMode } from '../context/DarkModeContext';
import LogOut from "../images/icons/majesticons--logout.svg"
import Theme from "../images/icons/line-md--moon-filled-to-sunny-filled-loop-transition.svg"
import UserDet from "../images/icons/line-md--person-filled.svg"

const Sidenav = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [activeItem, setActiveItem] = useState('');

    const navStyles = {
        backgroundColor: isDarkMode ? '#162447' : '#6a5acd',
        color: isDarkMode ? '#ffffff' : '#000000'
    };

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    const isActive = (itemName) => {
        return activeItem === itemName ? 'active' : '';
    };

    const verticalActiveBar = (itemName) => {
        return activeItem === itemName ? 'active-bar' : '';
        
    };
    const verticalBarStyles ={
        marginLeft: '-10px',
        marginTop: '-10px',
        width: '2px',
        height: '100%',
        backgroundColor: isDarkMode? '#ffffff' : '#000000'
    }

    const handleLogOut = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <nav className={`side-nav ${isDarkMode ? 'dark-mode' : ''}`} style={navStyles}>
        <div className="dark">
            <img src={Theme} alt="dark" onClick={toggleDarkMode} />
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </div>
            </div>
            <ul>
                <li className={`special ${isActive('Dashboard')}`}>
                    <div className={`nav-item ${isActive('Dashboard')}`}>
                        <div className="nav-icon">
                            <img src={Dashcon} alt="Dashboard" />
                        </div>
                        <div className="navtem">
                            <Link to='/home' onClick={() => handleItemClick('Dashboard')}>Dashboard</Link>
                        </div>
                        <div className={`vertical-bar ${verticalActiveBar('Dashboard')}`} style={verticalBarStyles}></div>
                    </div>
                </li>
                <li className={`${isActive('Profile')}`}>
                    <div className={`nav-item ${isActive('Profile')}`}>
                        <div className="nav-icon">
                            <img src={Profilecon} alt="Profile" />
                        </div>
                        <div className="navtem">
                            <Link to='/profile' onClick={() => handleItemClick('Profile')}>Profile</Link>
                        </div>
                        <div className={`vertical-bar ${verticalActiveBar('Profile')}`}></div>
                    </div>
                </li>
                <li className={`${isActive('Health Goals')}`}>
                    <div className={`nav-item ${isActive('Health Goals')}`}>
                        <div className="nav-icon">
                        <div className="goalcon">
                        <img src={HealthGoalcon} alt="Health Goals" />
                        </div>
                        </div>
                        <div className="navtem">
                            <Link to='/healthgoals' onClick={() => handleItemClick('Health Goals')}>Health Goals</Link>
                        </div>
                        <div className={`vertical-bar ${verticalActiveBar('Health Goals')}`}></div>
                    </div>
                </li>
                <li className={`${isActive('Symptoms')}`}>
                    <div className={`nav-item ${isActive('virtual')}`}>
                        <div className="nav-icon">
                            <img src={Symptomcon} alt="Symptoms" />
                        </div>
                        <div className="navtem">
                            <Link to='/virtualassistant' onClick={() => handleItemClick('virtual')}>Virtual Health Assistant</Link>
                        </div>
                        <div className={`vertical-bar ${verticalActiveBar('virtual')}`}></div>
                    </div>
                </li>
                <li className={`${isActive('Medication')}`}>
                    <div className={`nav-item ${isActive('Medication')}`}>
                        <div className="nav-icon">
                            <img src={Medicationcon} alt="Medication" />
                        </div>
                        <div className="navtem">
                            <Link to='/medication' onClick={() => handleItemClick('Medication')}>Medication Management</Link>
                        </div>
                        <div className={`vertical-bar ${verticalActiveBar('Medication')}`}></div>
                    </div>
                </li>
               
                <li className={`${isActive('details')}`}>
                    <div className={`nav-item ${isActive('details')}`}>
                        <div className="nav-icon">
                            <img src={UserDet} alt="Settings" />
                        </div>
                        <div className="navtem">
                            <Link to='/details' onClick={() => handleItemClick('Settings')}>Patient Details</Link>
                        </div>
                        <div className={`vertical-bar ${verticalActiveBar('Settings')}`}></div>
                    </div>
                </li>
                <li className={`${isActive('Log Out')}`}>
                    <div className={`nav-item ${isActive('Log Out')}`}>
                        <div className="nav-icon">
                            <img src={LogOut} alt="Log Out" />
                        </div>
                        <div className="navtem">
                            <Link to='/' onClick={handleLogOut}>Log Out</Link>
                        </div>
                        <div className={`vertical-bar ${verticalActiveBar('Log Out')}`}></div>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Sidenav;
