import React from 'react'
import styles from './Layout.module.css';

function Layout() {

  const projects = [
    {
      name: 'Tropical Isle Noida',
      location: 'At Sector 146, Noida',
      type: '3 & 4 BHK Premium Homes',
      price: 'rs 3.2 Cr* Onwards',
      image: 'https://www.godrej-homes.net/allprojects-platter/img/Tropical%20Isle%20Noida.png',
      discount1: [
        'Instant Card Swip Discount: rs 1 Lacs*',
        
      ],
      discount2: [
        'Early Bird Discount: rs 2Lacs*',
      ],
      discount3: [
        'Project Area: 12.4 Acres Acres',
        'Only 4 apartments per floor',
      ],

      discount4: [
        'Only 4 apartments per floor',
      ],

      button:[
        'View Details'
      ],

    
    },

    {

      name: 'Godrej Jardinia',
      location: 'At Sector 146, Noida',
      type: '3 & 4 BHK Premium Homes',
      price: 'rs 3.2 Cr* Onwards',
      image: 'https://www.godrej-homes.net/allprojects-platter/img/Tropical%20Isle%20Noida.png',
      discount1: [
        'Instant Card Swip Discount: rs 1 Lacs*',
        
      ],
      discount2: [
        'Early Bird Discount: rs 2Lacs*',
      ],
      discount3: [
        'Exclusive Pool And Biggest Clubhouse',
        
      ],

      discount4: [
        'Close To Metro Stationa',
      ],

      button:[
        'View Details'
      ],

    },

    {

      name: 'Godrej Woods',
      location: 'At Sector 43, Noida',
      type: '3 & 4 BHK+S Apartments',
      price: 'rs 3.00 Cr* Onwards',
      image: 'https://www.godrej-homes.net/allprojects-platter/img/Tropical%20Isle%20Noida.png',
      discount1: [
        'Lush grenn urban forest',
        
      ],
      discount2: [
        'Clubhouse with lifestyle amenities',
      ],
      discount3: [
        'Renowed serviice partner-tie ups',
        
      ],

      discount4: [
        'Podium-level amenities',
      ],

      button:[
        'View Details'
      ],

    },

    {

      name: 'Godrej Palm Retreat',
      location: 'At Sector 150, Noida',
      type: '3 & 4 BHK Apartments',
      price: 'rs 2.5 Cr* Onwards',
      image: 'https://www.godrej-homes.net/allprojects-platter/img/Tropical%20Isle%20Noida.png',
      discount1: [
        'Next to a 16 Hectare Park',
        
      ],
      discount2: [
        'Proposed International Airport',
      ],
      discount3: [
        'Sunken Resort Club',
        
      ],

      discount4: [
        'Terrace Gardens',
      ],

      button:[
        'View Details'
      ],

    },

    {

      name: 'Godrej Nurture',
      location: 'At Sector 150, Noida',
      type: '3 & 4 BHK Apartments',
      price: 'rs 2.5 Cr* Onwards',
      image: 'https://www.godrej-homes.net/allprojects-platter/img/Tropical%20Isle%20Noida.png',
      discount1: [
        '24*7 Security with Top Security',
        
      ],
      discount2: [
        'E-Library,Music Traning School',
      ],
      discount3: [
        'Thoughtfully-Designed',
        
      ],

      discount4: [
        'Yoga & Meditation Area',
      ],

      button:[
        'View Details'
      ],

    },

    {

      name: 'Godrej Golf Links',
      location: 'At Greater Noida',
      type: '3 & 4 BHK Apartments',
      price: 'rs 3 Cr* Onwards',
      image: 'https://www.godrej-homes.net/allprojects-platter/img/Tropical%20Isle%20Noida.png',
      discount1: [
        '9-Hole Golf Course Ground',
        
      ],
      discount2: [
        'Drive in Cinema',
      ],
      discount3: [
        'Italian Marble Flooring',
        
      ],

      discount4: [
        'High Street Retail',
      ],

      button:[
        'View Details'
      ],

    },

    {

      name: 'Godrej Nest',
      location: 'At Sector 150, Noida',
      type: '3 & 4 BHK Apartments',
      price: 'rs 2.5 Cr* Onwards',
      image: 'https://www.godrej-homes.net/allprojects-platter/img/Tropical%20Isle%20Noida.png',
      discount1: [
        '5 tier Security',
        
      ],
      discount2: [
        'Theme-based Gardens',
      ],
      discount3: [
        'Cafe,GYMS,Convenience store',
        
      ],

      discount4: [
        'Recreational Amenities',
      ],

      button:[
        'View Details'
      ],

    },

    {

      name: 'Godrej Connaught One',
      location: 'At Connaught Place,Delhi',
      type: '3 & 4 BHK Apartments',
      price: 'rs 17 Cr* Onwards',
      image: 'https://www.godrej-homes.net/allprojects-platter/img/Tropical%20Isle%20Noida.png',
      discount1: [
        'A safe heaven',
        
      ],
      discount2: [
        'Roof-top Pool',
      ],
      discount3: [
        'Fully Loaded Kitchen',
        
      ],

      discount4: [
        'Limited Edition Property',
      ],

      button:[
        'View Details'
      ],

    },

  

  ];

  return (
    <div className={styles.Layout}>
      {
        projects.map((projects, index) => (

          <div key={index}>

            <div className={styles.Box}>

             <div className={styles.image}><img src={projects.image}></img></div>
              <ul>
                    <div className={styles.name}><span>{projects.name}</span></div>

                    <div className={styles.location}>{projects.location}</div>

                    <div className={styles.price}>Price:<br/> {projects.price}</div>

                    <div className={styles.type}>Type:<br/>{projects.type}</div>

                    <div className={styles.checkbox}>
                      <div className={styles.discount1}>{projects.discount1}</div>
                      <div className={styles.discount1}>{projects.discount2}</div>
                      <div className={styles.discount1}>{projects.discount3}</div>
                      <div className={styles.discount1}>{projects.discount4}</div>
                    </div>
                    <div className={styles.Button}><button>{projects.button}</button></div>

              </ul>

            </div>

          </div>
        ))
      }
    </div>
  );
}


export default Layout
