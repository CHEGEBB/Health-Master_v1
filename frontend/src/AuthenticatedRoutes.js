import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/UserProfile';
import HealthGoals from './pages/HealthGoals';
import Medication from './pages/Medication';
import VirtualAssistant from './pages/VirtualAssistant';
import Details from "./pages/PatientDetails";


const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/healthgoals" element={<HealthGoals />} />
        <Route path="/medication" element={<Medication />} />
        <Route path="/details" element={<Details />} />
        <Route path="/virtualassistant" element={<VirtualAssistant />} />

        
    </Routes>
  );
};

export default AuthenticatedRoutes;
