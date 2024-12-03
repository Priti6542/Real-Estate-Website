import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (

    <div className={styles.content}>

    <footer className={styles.Footer}>
       <span>About Properties In Bangalore<span/></span><br/>
       We aim to focus on solutions and follow a result-driven,energetic<br/>
       approach to deliver the best service to our customers through a prudent mix<br/>
       of traditional marketing,new-age tech tools and innovation strategies.<br/><br/>
       Agent Rera:PRM/KA/RERA/1251/446/AG/231007/004164|Projects Rera-Godrej Park Retreat:<br/>
       PRM/KA/RERA/1251/308/PR/171028/000667|Godrej Ananda:PRRM/KA/RERA/1251/309/PR/210331/004084<br/>
       |Godrej Woodscape:PRM/KA/RERA/1251/446/PR/170524/006882<br/><br/><br/>
       <span>Call Us Anytime</span><br/>+91-1234567890<br/><br/><br/>

       <div className={styles.para}>
          Disclaimer:The content is for information purposes only and does not constitute an offer to avail of any service.Prices mentioned <br/>
          mentioned are subject to availability.Images for representation purposes only.This website is belong to
       </div>
       
    </footer>

    <div className={styles.policy}>
      Privacy Policy | Digital Media Planned by Umiko web
    </div>

  </div>
  )
}

export default Footer
