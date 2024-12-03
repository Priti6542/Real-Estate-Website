import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.card}>
                    <div className={styles.logo}>
                        <h3>A PROJECT BY</h3>
                        <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/gp-logo.png" />
                    </div>
                    <div className={styles.address}>
                        CORPORATE OFFICE: Unit No. 5C, 5th Floor, Godrej One, Pirojshanagar, Vikhroli East, Mumbai -<br />
                        400 079.<br /><br />
                        SITE ADDRESS: Godrej Sky Terraces , Plot Bearing / CTS / Survey / Final Plot No.: 418, 418/1<br />
                        to 418/11 at Deonar, Kurla, Mumbai Suburban, 400088;

                    </div>
                </div>
                <div className={styles.disclaimer}>
                    <p><span>DISCLAIMER</span><br />
                        The project is registered as Godrej Sky Terraces on MAHARERA bearing Registration No. P51800053882 available on MahaRERA website (https://maharera.mahaonline.gov.in).<br />

                        Grievance Redressal Email Address: GRIEVANCE.GST@godrejproperties.com<br />

                        The Developer of Project is Godrej Properties Limited. The sales of office is at Godrej Sky Terraces , Plot Bearing / CTS / Survey / Final Plot No.: 418, 418/1 to 418/11 at Deonar, Kurla, Mumbai Suburban, 400088<br />
                        and registered office of Developer is Godrej One, 5th floor, Pirojshanagar, Eastern Express Highway, Vikhroli (East), Mumbai 400 079.<br />

                        The website contains artist’s impressions. No warranty is expressly or impliedly given that the completed development will comply in any degree with such artist’s impression as depicted. The furniture,<br />
                        accessories, paintings, plantations, landscaping, items, electronic goods, additional fittings/fixtures, decorative items, false ceiling including finishing materials, specifications, shades, sizes and colour of the <br />
                        tiles, etc. shown in the image are only indicative in nature and are only for the purpose of illustrating/indicating a conceived layout and do not form part of the standard specifications/amenities/services to <br />
                        be provided in the unit and/or the Project. This audio visual also contains stock footages for representation purpose only. The Sale is subject to terms of Application Form and Agreement for Sale. All <br />
                        specifications of the unit shall be as per the final agreement between the Parties. Recipients are advised to apprise themselves of the necessary and relevant information of the project/offer prior to making<br />
                        any purchase decisions. The official website of Godrej Properties Ltd. is www.godrejproperties.com. Please do not rely on the information provided on any other website. The Developer has obtained<br />
                        Concession Plan approval from Hon’ble Municipal Commissioner of Brihanmumbai Municipal Corporation bearing P-17114/2023/(418 AND OTHER) /M/E/WARD/DEONAR-E dated 04th Sept. 2023, whereunder<br />
                        the swimming pool has been considered on the 21st Floor (i.e. On terrace above 24th level) of the Project. The Developer intends to construct the said swimming pool on the Terrace floor above 24th floor and<br />
                        has applied/will apply for the relevant approval with respect the same with the office of the “Brihanmumbai Municipal Corporation”. The development of the swimming pool shall therefore be subject to the<br />
                        grant of the sanctioned approvals from the office of the Executive Engineer of Building Proposal Department of Brihanmumbai Municipal Corporation.<br /><br />

                        If the above mentioned conditions are not fulfilled by the promoter, the Authority may take necessary action against the promoter including revoking the registration granted herein, as per<br />
                        the Act and the rules and regulations made there under.</p>
                </div>
                <div className={styles.image}>
                    <img src='https://www.godrejproperties.com/backoffice/data_content/projects/godrej_sky_terraces_chembur_mumbai/landing_page/assets/img/updated_rera_qr.png'></img>

                </div>
                <div className={styles.Copyright}>
                    <div className={styles.copyright}>
                    Copyright © 2023 All Rights Reserved by Godrej Properties
                    </div>
                    <div className={styles.sentence}>
                    Designed & Developed by First Economy
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer
