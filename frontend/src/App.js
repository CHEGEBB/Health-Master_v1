import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Signup from './authpages/Signup';
import Login from './authpages/Login';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import Sidenav from './components/Sidenav';
import { DarkModeProvider } from './context/DarkModeContext';
import Landingpage from './components/Landingpage';

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<AuthenticatedApp />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
};

const AuthenticatedApp = () => {
  return (
    <div className="App">
      <div className="side-navbar">
        <Sidenav />
      </div>
      <div className="main-app">
        <AuthenticatedRoutes />
      </div>
    </div>
  );
};

export default App;
