import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';

function Card() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/about/2.png',
    'https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/overview-image.jpg',
    'https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/about/3.png',
    'https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/about/4.png'
  ];

  // Set up automatic image sliding every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Clean up interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.Card}>
      <div className={styles.box}>ABD</div>
      
      <div className={styles.image}>
        <img src={images[currentIndex]} alt="sliding image" />
      </div>

      <div className={styles.para}>
          <h1>An ode to Chembur</h1>

          <p>
          Tucked in the warm embrace of Mumbai, Chembur stirs nostalgia for <br/>
          the bygone era. It is where culture, cuisine, community and cinema <br/>
          come together to take you on a nostalgic expedition. The charm of<br/>
          Chembur lies in its bungalow culture- a tribute to a relaxed and an<br/>
          unhurried lifestyle. Picture cobblestone pathways, inviting parks,<br/>
          classic verandahs, charming cafes, and a sense of community that<b/>
          thrives in the local parks and the timeless bungalows. This is our<br/>
          heartfelt tribute to Chembur.
          </p>
      </div>

      <div className={styles.text}>
        LIVES THE BANGALOW LIFE
      </div>

      
    </div>
  );
}

export default Card;
