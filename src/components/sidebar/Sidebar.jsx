import React from 'react';
import styles from './Sidebar.module.css'; // Ensure this is correct path

function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.heading}>
        Schedule A Site Visit
      </div>

      <div className={styles.para}>
        Please fill out the form below, and our expert will <br />
         get back to you soon.
      </div>

      <form className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="fullName"
            placeholder="Your full name"
            className={styles.inputField}
          />
        </div>

        <div className={styles.emailContainer}>
          <input
            type="email"
            name="email address"
            placeholder="enter your email adress"
            className={styles.inputField}
          />
        </div>

        <div className={styles.phonContainer}>
          <input
            type="tel"
            name=""
            placeholder="Phone"
            className={styles.inputField}
          />
        </div>

        <div className={styles.button}>
          <button>GET CALL BACK</button>
        </div>

        {/* You can add more fields as needed */}
      </form>

      <div className={styles.buttonContainer}>

        <div className={styles.number}>
          +91-6364884021
        </div>

        <div className={styles.Property}>
          Luxury Propert.
        </div>

        <div className={styles.Location}>
          Exellent Location
        </div>

        <div className={styles.World}>
          World-Class Amenities.
        </div>
      </div>

    </div>
  );
}

export default Sidebar;
