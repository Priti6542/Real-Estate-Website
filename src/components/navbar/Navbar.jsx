import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import styles from './Navbar.module.css';
import Popup from '../popup/Popup';
import ButtonContainer from '../button/ButtonContainer';

function Navbar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();  // Initialize navigate hook
 
  const openPopup = (message) => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    console.log("Selected city:", city);
    
    navigate(`/details/${city}`);

  };

  return (
    <>
      <ul className={styles.Navbar}>
        {/* Home Link */}
        <li>
          <Link to="/" onClick={() => openPopup('This is the Home page!')}>
            Home
          </Link>
        </li>

        {/* City Dropdown - ButtonContainer Next to Home */}
        <li className={styles.cityDropdown}>
          <ButtonContainer selectedCity={selectedCity} onCityClick={handleCityChange} />
        </li>

        {/* Other Links */}
        <li>
          <Link to="/about" onClick={() => openPopup('This is the About Us page!')}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/schedule" onClick={() => openPopup('This is the Schedule Site Visit page!')}>
            Schedule Site Visit
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => openPopup('This is the Contact Us page!')}>
            Contact Us
          </Link>
        </li>

        {/* Phone Number */}
        <div className={styles.btn}>
          <button>+91-6364884024</button>
        </div>
      </ul>

      {/* Popup */}
      {isPopupOpen && <Popup isOpen={isPopupOpen} closePopup={closePopup} />}
    </>
  );
}

export default Navbar;
