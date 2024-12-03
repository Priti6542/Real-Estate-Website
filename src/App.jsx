
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ShedulePage from './pages/ShedulePage';
import ContactPage from './pages/ContactPage';
import Popup from './components/popup/Popup';
// import ButtonContainer from './components/button/ButtonContainer';
import Data from './Data';
import Details from './components/details/details';
// import Footer from './components/footer/Footer';

function App() {
  const [selectedCity, setSelectedCity] = useState('pune');
  const navigate = useNavigate(); // Hook for programmatic navigation
  
  const handleCityChange = (city) => {
    setSelectedCity(city);
    // Navigate to the details page for the selected city
    navigate(`/details/${city}`);
  };

  return (
    <>
      <Navbar />
      <Popup />

      <h1>Real Estate Projects</h1>

      {/* <ButtonContainer selectedCity={selectedCity} onCityClick={handleCityChange} /> */}

      {/* Render Details component based on selected city */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/shedule" element={<ShedulePage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Dynamic route for city details */}
        <Route
          path="/details/:city"
          element={<CityDetails />}
        />
      </Routes>

      {/* {selectedCity && <Footer selectedCity={selectedCity} />} */}


    </>
  );
}

// This component will render the details based on the selected city from the URL
const CityDetails = () => {
  const { city } = useParams(); // Get city from the URL
  const cityData = Data[city]; // Get the data for the selected city
  
  if (!cityData) {
    return <p>No data available for this city.</p>;
  }

  return (
    <Details
      city={city}
      projects={cityData.projects} // Accessing the projects for the selected city
      cityImage={cityData.cityImage}
      cityName={cityData.cityName}
    />
  );
  // <Footer/>

};

export default App;
