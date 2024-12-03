import React from 'react';
import styles from './Popup.module.css';

function Popup({ isOpen, closePopup }) {

  if (!isOpen) return null;
  
  return (
    <div className={styles.overlay} onClick={closePopup}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closePopup}>
          X
        </button>
        <div className={styles.content}>
          <div className={styles.header}>
            Godrej Properties In Pune
          </div>

            <div className={styles.input}>
              <input type='text' name='text' placeholder='enter your name'></input>
            </div>

            <div className={styles.email}>
            <input type="email" name="email" placeholder="enter your email" />
            </div>

            <div className={styles.tel}>
            <input type="tel" name="phone" placeholder="enter your phone number" />
            </div>

            
            

          <div className={styles.image}>
            <img src='https://www.godrej-homes.net/allprojects-platter/img/about_img.png'></img>
          </div>

          <div className={styles.button}>
            <button className={styles.submitButton}>Get Call Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
