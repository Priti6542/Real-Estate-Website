// import React from 'react';
// import Data from '../../../Data';
// import styles from './Card.module.css';
// import Sidebar from '../../sidebar/Sidebar';

// function Card() {
//   return (
//     <div className={styles.Card}>

//       <div className={styles.sidebar}>
//         <Sidebar />
//       </div>
      
//       <div className={styles.BOX}>
//         {Data.pune.map((property, index) => (
//           <div key={index}>
//             <div className={styles.Box}>

//               <div className={styles.image}><img src={property.image} alt={property.name} /></div>

//               <ul>
//                 <li className={styles.name}><span>{property.name}</span></li>

//                 <li className={styles.location}>{property.location}</li>

//                 <div className={styles.PriceType}>
//                   <li className={styles.type}>Type:<br /> {property.type}</li>
//                   <li className={styles.price}>Price:<br /> {property.price}</li>
//                 </div>

//                 <li className={styles.checkbox}>

//                   <div className={styles.checkboxContainer}>
//                     <input type='checkbox' />
//                     <label className={styles.discount1}>{property.discount1}</label>
//                   </div>

//                   <div className={styles.checkboxContainer}>
//                     <input type='checkbox' />
//                     <label className={styles.discount2}>{property.discount2}</label>
//                   </div>

//                   <div className={styles.checkboxContainer}>
//                     <input type='checkbox' />
//                     <label className={styles.discount3}>{property.discount3}</label>
//                   </div>

//                   <div className={styles.checkboxContainer}>
//                     <input type='checkbox' />
//                     <label className={styles.discount4}>{property.discount4}</label>
//                   </div>


//                 </li>


//                 <li className={styles.Button}>
//                   <button>{property.button}</button>


//                 </li>
//               </ul>

//             </div>
//           </div>


//         ))}
//       </div>

//     </div>

//   );
// }

// export default Card;
