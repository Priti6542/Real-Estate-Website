import React, { useState } from 'react';
import styles from './ButtonContainer.module.css';

const ButtonContainer = ({ selectedCity, onCityClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // Manage the dropdown state

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);  // Toggle the dropdown state
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.dropdownButton}
        id="btn"
        aria-label="Toggle city dropdown"
        onClick={toggleDropdown}  // Toggle dropdown visibility
      >
        {selectedCity ? selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1) : 'Select City'}
      </button>

      {/* Conditionally render the dropdown list based on state */}
      <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.open : ''}`}>
        {['pune', 'noida', 'mumbai', 'gurgaon', 'nagpur', 'delhi', 'chennai', 'kolkata', 'banglore'].map((city) => (
          <button
            key={city}
            className={`${styles.cityButton} ${city === selectedCity ? styles.active : ''}`}
            onClick={() => {
              onCityClick(city);
              setIsDropdownOpen(false); // Close dropdown after selection
            }}
            aria-pressed={city === selectedCity}  // Adds pressed state for better accessibility
          >
            {city.charAt(0).toUpperCase() + city.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonContainer;
