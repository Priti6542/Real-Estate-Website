import React from 'react'
import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.Hero}>

      <div className={styles.Noida}>
        Buy Godrej Properties in Nagpur
      </div>
      
      <div className={styles.image}>
      <img src="https://www.godrej-homes.net/allprojects-platter/img/banner_tropical_isle.png"/></div>
    </div>
  )
}

export default Hero
