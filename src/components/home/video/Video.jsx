import React, { useState } from 'react';
import styles from './Video.module.css';

// Assuming 'videoplayback.mp4' is a local file
import videoFile from './videoplayback.mp4';

function Video() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Media array with videos and images
  const media = [
    videoFile,  // Local video file
    'https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/gallery/5.jpg',
    'https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/gallery/6.jpg',
    'https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/gallery/7.jpg',
    'https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/gallery/8.jpg',
  ];

  // Helper function to check if media is a video
  const isVideo = (src) => {
    return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg');
  };

  // Function to handle next and previous actions
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.Video}>
      <div className={styles.Card}>
          <h1>FEEL AT HOME</h1>
        <div className={styles.mediaContainer}>
          {isVideo(media[currentIndex]) ? (
            <video
              key={media[currentIndex]} // Ensure unique key for each video
              src={media[currentIndex]}
              autoPlay
              loop
              muted
              playsInline
              className={styles.mediaElement}
            />
          ) : (
            <img
              key={media[currentIndex]} // Ensure unique key for each image
              src={media[currentIndex]}
              alt="media"
              className={styles.mediaElement}
            />
          )}
        </div>

        {/* Navigation Arrows */}
        <button className={`${styles.arrow} ${styles.prev}`} onClick={handlePrev}>
          &#10094;
        </button>
        <button className={`${styles.arrow} ${styles.next}`} onClick={handleNext}>
          &#10095;
        </button>
      </div>
      <div className={styles.properties}>
        <p>A LEGECY LIKE NO OTHER</p>
        <h1>ABOUT GODREJ PROPERTIES</h1>
        <div className={styles.text}>
        At Godrej Properties, it is our legacy of trust and commitment to cutting-edge design that sets us apart. Over the past 126 years, we've built many proud <br/>
        landmarks across the country. Godrej One, The Trees, Godrej Golf Links and Godrej Reflections to name a few. So, with a proud tradition of many firsts in the <br/>
        real estate industry, we continue to lay the foundations for iconic lifestyles .
        </div>
      </div>
    </div>
  );
}

export default Video;
