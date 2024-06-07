import React, { useState } from 'react';
import './VirtualHealthCoach.scss';
import Assistant from '../images/2(2).jpg';
import User from '../images/user.png';
import { useDarkMode } from "../context/DarkModeContext"; 


const VirtualHealthCoach = () => {
  const { isDarkMode } = useDarkMode();
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch('https://health-master-backend.onrender.com/gemini/generateText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userInput }),
      });
      const data = await response.json();
      const newMessage = { text: userInput, type: 'user' };
      const coachMessage = { text: data.text, type: 'coach' };
      setConversation([...conversation, newMessage, coachMessage]);
      setUserInput('');
    } catch (error) {
      console.error('Error fetching response:', error);
      setError('Error fetching response. Please try again later.');
    }
  };

 
const weeklyStyles={
    backgroundColor: isDarkMode ? '#1B1B2F' : '#f0f8ff',
    color: isDarkMode ? '#fff' : '#000'
}


  return (
    <div className="virtual-health-coach" style={weeklyStyles}>
      <div className="intro-section">
        <h1>Welcome to Health Master</h1>
        <p>Your Personal Virtual Health Coach</p>
        <p>The Virtual Health Coach is here to provide personalized guidance and support to help you achieve your health and wellness goals. Feel free to ask any health-related questions or seek advice on maintaining a healthy lifestyle.</p>
      </div>
      <div className="conversation">
        {conversation.map((message, index) => (
          <div key={index} className={`message ${message.type}`} >
            {message.type === 'user' ? (
              <img src={User} alt="User Avatar" className="avatar" />
            ) : (
              <img src={Assistant} alt="Health Coach Avatar" className="avatar" />
            )}
            <div className="text">{message.text}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Start typing here..."
        />
        <button type="submit">Send</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default VirtualHealthCoach;
