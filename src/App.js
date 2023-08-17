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

function App() {
  return (
    <div className="App">
      <TopBar />
      <Banner />
      <FeaturedFreelancers />
      <CustomerProfiles />
      <NewsletterSignup />
      <Footer />
      <PrivacyAndTerms /> 
    </div>
  );
}

export default App;
