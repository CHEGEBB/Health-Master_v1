import React from 'react';
import { Link } from 'react-router-dom';
import './Landingpage.scss';
import IntroImage from '../images/3.jpg';
import sypmtom from '../images/3(3).jpg';
import medicine from '../images/medicine.jpg';
import health from '../images/health.avif';
import goals from '../images/2(1).jpg';
import online from '../images/online.jpg';
import feauture from '../images/1.jpg';

const LandingPage = () => {
    return (  
        <div className='landing-page'>
            <nav className="navbar">
                <ul>
                    <li><a href='#intro-section'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#featured'>Featured</a></li>
                    <li className='login'><Link to='/login'>Login</Link></li>
                    <li className='signup'><Link to='/signup'>Sign Up</Link></li>
                </ul>
            </nav>
            <section className='intro-section' id='intro-section'>
                <div className='cover-image'>
                    <img src={IntroImage} alt='Health Master Cover' />
                </div>
                <div className='content'>
                    <h1>Health Master</h1>
                    <p>Your personal health management companion</p>
                    <button onClick={() => window.location.href = '/login'}>Go to Application</button>
                </div>
            </section>
            <section className='feature-section' id='featured'>
                <div className='content'>
                    <h1>Features</h1>
                    <p>Explore the key features of Health Master:</p>
                    <div className='features-grid'>
                    <div className='feature'>
    <div className='feature-image'>
        <img src={sypmtom} alt='Intelligent Symptom Checker' />
    </div>
    <div className='feature-info'>
        <h2>Health goals</h2>
        <p>Empower your journey to well-being by setting personalized health goals and tracking your progress with Healthmaster.</p>
    </div>
</div>
<div className='feature'>
    <div className='feature-image'>
        <img src={medicine} alt='Medication Management System' />
    </div>
    <div className='feature-info'>
        <h2>Medication Management System</h2>
        <p>Effortlessly manage your medications and never miss a dose with Healthmaster's intuitive Medication Management System.</p>
    </div>
</div>
<div className='feature'>
    <div className='feature-image'>
        <img src={health} alt='Health and Wellness Gamification App' />
    </div>
    <div className='feature-info'>
        <h2>Health and Wellness Gamification App</h2>
        <p>Turn healthy habits into fun challenges and earn rewards with Healthmaster's Gamification App, making wellness an exciting journey.</p>
    </div>
</div>
<div className='feature'>
    <div className='feature-image'>
        <img src={goals} alt='Health Goals and Progress Tracking' />
    </div>
    <div className='feature-info'>
        <h2>Health Goals and Progress Tracking</h2>
        <p>Visualize your health journey, celebrate achievements, and stay motivated with Healthmaster's seamless goal tracking and progress monitoring.</p>
    </div>
</div>
<div className='feature'>
    <div className='feature-image'>
        <img src={feauture} alt='Virtual Health Assistant' />
    </div>
    <div className='feature-info'>
        <h2>Virtual Health Assistant</h2>
        <p>Experience personalized guidance and support anytime, anywhere with Healthmaster's Virtual Health Assistant, your trusted companion on the road to wellness.</p>
    </div>
</div>
<div className='feature'>
    <div className='feature-image'>
        <img src={online} alt='Online Consultancy' />
    </div>
    <div className='feature-info'>
        <h2>Online Consultancy</h2>
        <p>Connect with experienced healthcare professionals remotely and receive expert advice tailored to your needs with Healthmaster's Online Consultancy feature.</p>
    </div>
</div>

                    </div>
                </div>
            </section>
            <section className='about-section' id='about'>
                <div className='content'>
                    <h1>About</h1>
                    <p>Health Master is designed to tackle the challenge of managing health and wellness efficiently. In today's fast-paced world, individuals often struggle to keep track of their symptoms, medications, health goals, and overall wellness. Health Master aims to bridge this gap by providing a platform that offers an Intelligent Symptom Checker, Medication Management System, Health and Wellness Gamification App, and Health Goals and Progress Tracking.</p>
                    <p>This project was inspired by the need for better health management tools and is a portfolio project for Holberton School.</p>
                    <p>Meet the team:</p>
                    <ul>
                        <li>Brian Chege - <a href='https://www.linkedin.com/in/brianchege'>LinkedIn</a>, <a href='https://github.com/brianchege'>GitHub</a>, <a href='https://twitter.com/brianchege'>Twitter</a></li>
                    </ul>
                    <p>Check out the <a href='https://github.com/your-repo'>GitHub repository</a> for this project.</p>
                </div>
            </section>
            <section className='contact-section' id='contact'>
                <div className='content'>
                    <h1>Contact Us</h1>
                    <form className='contact-form'>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' id='name' name='name' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' name='email' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='message'>Message</label>
                            <textarea id='message' name='message' required></textarea>
                        </div>
                        <button type='submit'>Send Message</button>
                    </form>
                </div>
            </section>
            <footer className='footer'>
                <div className='footer-content'>
                    <div className='quick-links'>
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href='#intro-section'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#featured'>Featured</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='social-links'>
                        <h2>Follow Me</h2>
                        <ul>
                            <li><a href='https://github.com/CHEGEBB' target='_blank' rel='noopener noreferrer'>GitHub</a></li>
                            <li><a href='https://www.linkedin.com/in/yourprofile' target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
                            <li><a href='https://twitter.com/yourprofile' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p>&copy; 2024 Brian Chege. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
