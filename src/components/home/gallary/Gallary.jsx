import React from 'react';
import styles from './Gallary.module.css';

function Gallary() {
    return (
        <div className={styles.Gallary}>
            <div className={styles.image}>
                <img
                    src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/parallax-image.jpg"
                    alt="Godrej Sky Terraces"
                />
            </div>

            <p>
                Every corner of our bungalow-inspired homes & amenities has room for reminiscence. It’s about emotions, experiences, and reliving the cherished moments<br />
                of our childhood. It’s a tribute to the past and a promise for the future, a space where the magic of nostalgia meets the possibilities of the present.
            </p>

            <div className={styles.images}>
                <div className={styles.imageItems}>
                    <img src='https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/highlights/Living-Room.png'></img>
                    A space big enough for big dreams
                </div>


                <div className={styles.imageItems}>
                    <img src='https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/highlights/deck.png'></img>
                    A large deck, decked for happy times
                </div>

                <div className={styles.imageItems}>
                    <img src='https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/highlights/Private-Enterance.png'></img>
                    An entrance that lets you make an entrance
                </div>


                <div className={styles.imageItems}>
                    <img src='https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/highlights/Infinity-Pool.png'></img>
                    Infinite relaxation in the infinity pool
                </div>


                <div className={styles.imageItems}>
                    <img src='https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/highlights/backyard-greens.png'></img>
                    A backyard that brings back memories
                </div>


                <div className={styles.imageItems}>
                    <img src='https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/highlights/Kids-Play-Area.png'></img>
                    A childhood full of adventures at the kid's play area
                </div>

            </div>
        </div>
    );
}

export default Gallary;
