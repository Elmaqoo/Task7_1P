import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './App.css';
import TopBar from './components/TopBar';
import Banner from './components/Banner';
import FeaturedFreelancers from './components/FeaturedFreelancers';
import CustomerProfiles from './components/CustomerProfiles';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';
import PrivacyAndTerms from './components/PrivacyAndTerms';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Routes>
          <Route path="/" element={<><Banner /><FeaturedFreelancers /><CustomerProfiles /><NewsletterSignup /><Footer /><PrivacyAndTerms /></>} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Registration />} /> 
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
