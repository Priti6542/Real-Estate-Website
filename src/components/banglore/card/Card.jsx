import React from 'react'
import styles from "./Card.module.css"

function Card() {
    return (
        <div className={styles.Card}>

            <div className={styles.Box}>


                <div className={styles.image}><img src='https://www.godrej-homes.net/allprojects-platter/img/Godrej%20Park%20Retreat.png'></img></div>

                <div className={styles.header}><span>Godrej Lakeside Orchard</span><br/>At Sarjapur,Banglore</div>

                <div className={styles.section}>
                    <div className={styles.section1}>Type:<br/> 3 & 4 BHK Apartments</div>
                    <div className={styles.section2}>Starting Price:<br/>rs 1.29 Cr* Onwards</div>
                </div>

                  <form >
                    <div className={styles.Form}>
                    <input type='checkbox' id="" value=""/>
                    <label>Multiple IT Parks in close Proximity</label><br/>

                    <input type='checkbox' id="" value=""/>
                    <label>4 Towers | G+27 Floors</label><br/>
                    
                    <input type='checkbox' id="" value=""/>
                    <label>Possession:Within 3 yrs</label><br/>
                    
                    <input type='checkbox' id="" value=""/>
                    <label>Easy Payment Plans| Book at 5.5%</label>
                    
                    </div>
                  </form> 

                    <div className={styles.Button}>
                        <button type="button">View Details</button>
                    </div> 

            </div>    



            <div className={styles.Box}>


                <div className={styles.image}><img src='https://www.godrej-homes.net/allprojects-platter/img/Godrej%20Ananda.png'></img></div>

                <div className={styles.header}><span>Godrej Ananda</span><br/>At Aerospace Park,Bagalur</div>

                <div className={styles.section}>
                    <div className={styles.section1}>Type:<br/> 3 & 4 BHK Apartments</div>
                    <div className={styles.section2}>Starting Price:<br/>85 Lacs* Onwards</div>
                </div>

                  <form >
                    <div className={styles.Form}>
                    <input type='checkbox' id="" value=""/>
                    <label>Dedicated Foyer Space</label><br/>

                    <input type='checkbox' id="" value=""/>
                    <label>35000 sq.ft clubhouse Z</label><br/>
                    
                    <input type='checkbox' id="" value=""/>
                    <label>80% Open Green Spaces</label><br/>
                    
                    <input type='checkbox' id="" value=""/>
                    <label>Vastu Compliant Homes</label>
                    
                    </div>
                  </form> 

                    <div className={styles.Button}>
                        <button type="button">View Details</button>
                    </div> 

            </div>    


            <div className={styles.Box}>


                <div className={styles.image}><img src='https://www.godrej-homes.net/allprojects-platter/img/Godrej%20upcoming.png'></img></div>

                <div className={styles.header}><span>Godrej Upcoming</span><br/>At Yeshwanthpur,Banglore</div>

                <div className={styles.section}>
                    <div className={styles.section1}>Type:<br/> 3 & 4 BHK Apartments</div>
                    <div className={styles.section2}>Starting Price:<br/>rs 2.99 Cr* Onwards</div>
                </div>

                  <form >
                    <div className={styles.Form}>
                    <input type='checkbox' id="" value=""/>
                    <label>Near NH 75 and AirportRoad.</label><br/>

                    <input type='checkbox' id="" value=""/>
                    <label>Total Land Area=05 Acres</label><br/>
                    
                    <input type='checkbox' id="" value=""/>
                    <label>Total No.of Towers=03 Towers</label><br/>
                    
                    <input type='checkbox' id="" value=""/>
                    <label>Total No.Of Units=346 </label>
                    
                    </div>
                  </form> 

                    <div className={styles.Button}>
                        <button type="button">View Details</button>
                    </div> 

            </div>    


            <div className={styles.Box}>


                <div className={styles.image}><img src='https://www.godrej-homes.net/allprojects-platter/img/Godrej%20Woodscape.png'></img></div>

                <div className={styles.header}><span>Godrej Woodscape</span><br/>At Budigere Cross,Bengal Lamps,Banglore</div>

                <div className={styles.section}>
                    <div className={styles.section1}>Type:<br/> 3 & 4 BHK </div>
                    <div className={styles.section2}>Starting Price:<br/>rs 2.24 Cr* Onwards</div>
                </div>

                  <form >
                    <div className={styles.Form}>
                    <input type='checkbox' id="" value=""/>
                    <label>Seamless Connectivity</label><br/>

                    <input type='checkbox' id="" value=""/>
                    <label>Early Bird Discount:rs 2Lacs*</label><br/>
                    
                    <input type='checkbox' id="" value=""/>
                    <label>Project Area:12.4 Acres Acres</label><br/>
                    
                    <input type='checkbox' id="" value=""/>
                    <label>Only 4 aprtments per floor</label>
                    
                    </div>
                  </form> 

                    <div className={styles.Button}>
                        <button type="button">View Details</button>
                    </div> 

            </div> 
            

        </div>

        
            
    )
}


export default Card
