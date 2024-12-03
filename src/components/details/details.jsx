import React from 'react';
import styles from './Details.module.css';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';

const Details = ({ city, projects, cityImage, cityName}) => {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.cityNameContainer}>{cityName}</div>

      {/* Render the city image */}
      {cityImage && (
        <div className={styles.cityImageContainer}>
          <img src={cityImage} alt={`${city} city`} className={styles.cityImage} />
        </div>
      )}

      <Sidebar />

      <h2>{city.charAt(0).toUpperCase() + city.slice(1)} Projects</h2>

      <div className={styles.projectsList}>
        {projects.length === 0 ? (
          <p>No projects available for {city}</p>
        ) : (
          projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              
              <img src={project.image} alt={project.name} className={styles.projectImage} />
              <div className={styles.projectInfo}>
                <h3 className={styles.projectName}>{project.name}</h3>
                
                <p className={styles.projectLocation}>{project.location}</p>

                <div className={styles.typeprice}>
                  <p className={styles.projectType}>type:<br />{project.type}</p>
                  <p className={styles.projectPrice}>price:<br />{project.price}</p>
                </div>

                <ul className={styles.projectDiscounts}>
                  {project.discount1 && (
                    <li>
                      <input type="checkbox" id={`discount1-${index}`} />
                      <label htmlFor={`discount1-${index}`}>{project.discount1}</label>
                    </li>
                  )}
                  {project.discount2 && (
                    <li>
                      <input type="checkbox" id={`discount2-${index}`} />
                      <label htmlFor={`discount2-${index}`}>{project.discount2}</label>
                    </li>
                  )}
                  {project.discount3 && (
                    <li>
                      <input type="checkbox" id={`discount3-${index}`} />
                      <label htmlFor={`discount3-${index}`}>{project.discount3}</label>
                    </li>
                  )}
                  {project.discount4 && (
                    <li>
                      <input type="checkbox" id={`discount4-${index}`} />
                      <label htmlFor={`discount4-${index}`}>{project.discount4}</label>
                    </li>
                  )}
                </ul>

                <button className={styles.viewDetailsButton}>{project.button[0]}</button>
              </div>
            </div>
          ))

          
        )}
      </div>

     <Footer/>
    </div>
  );
};

export default Details;
