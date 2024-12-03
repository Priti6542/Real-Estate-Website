import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (

    <footer className={styles.Footer}>
       <span>About Properties In Noida<span/></span><br/>
       We aim to focus on solutions and follow a result-driven,energetic<br/>
       approach to deliver the best service to our customers through a prudent mix<br/>
       of traditional marketing,new-age tech tools and innovation strategies.<br/><br/>
      Agent Rera:UPRERAAGT23971|Projects Rera-Godraj Jardinia:UPRERAPRJ288309/04/2024 | Godrej woods:<br/>
       UPRERAPRJ704730| Godrej palm retreat:UPRERAPRJ745601| Godrej Nurture:UPRERAPRJ17861|Godrej<br/>
       golf links:UPRERAPRJ16712|Godrej Nest:UPRERAPRJ13521|Godrej South Estate:DLRERA2019P0003|
       Godrej Connaught One:DLRERA2022P001
       <br/><br/><br/>
       <span>Call Us Anytime</span><br/>+91-1234567890<br/><br/><br/>

       <div className={styles.para}>
          Disclaimer:The content is for information purposes only and does not constitute an offer to avail of any service.Prices mentioned <br/>
          mentioned are subject to availability.Images for representation purposes only.This website is belong to
       </div>

       
    </footer>
  )
}

export default Footer
