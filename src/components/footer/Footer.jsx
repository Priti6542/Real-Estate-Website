import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.Footer}>
      
      <div className={styles.text}>
        <p>
          We aim to focus on solutions and follow a results-driven, energetic <br />
          approach to deliver the best service to our customers through a prudent mix <br />
          of traditional marketing, new-age tech tools and innovative strategies.
        </p>

      </div>
      <div className={styles.image}>
        <img src='https://www.godrej-homes.net/allprojects-platter/img/rera.png'></img>
      </div>

      <div className={styles.para}>
        Agent Rera : A52100038557 | Projects Rera - Godrej Woodside Plots : P52000077384 | Godrej Park World :<br />
        P52100054971 | Godrej River Crest : P52100077127 | Godrej Woodsville : P52100046729 | Godrej Society Shops<br />
        : P52100054971 | Godrej Urban Retreat : P52100050128 | Godrej Meadows : P52100031791 | Godrej Hill Retreat <br />
        : P52100029559 | Godrej Emerald Waters : P52100051200 | Godrej Grande : P52100047405 | Godrej Forest<br />
        Groove : P52100023129 | Godrej River Royale : P52100052957 <br /><br />
      </div>

      <div className={styles.call}>
        < div className={styles.logo}>
          <i class="fa-solid fa-phone-volume"></i>
        </div>
        <div className={styles.Callus}>
          <span>Call Us Anytime</span><br />
          +91-6364884021
        </div>
      </div>

      <div className={styles.Disclaimer}>
        Disclaimer:The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned <br />
        are subject to availability. Images for representation purposes only. This website is belong to authorized marketing partner.
      </div>
      <div className={styles.policy}>
        Privacy Policy | Digital Media Planned by Umiko Web
      </div>
    </div>
  )
}

export default Footer
