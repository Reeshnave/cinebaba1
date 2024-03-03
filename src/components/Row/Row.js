import React from 'react';
import Seat from '../Seats/Seat';
import styles from './Row.module.css'

function Row(props) {
    const seatsArray =new Array(props.row.numberOfSeats).fill('avalible');
  

    return (
        <li  className={styles.rows}>
        <h4>{props.row.name}</h4>
        <div className={styles.rowcenter}>
        <ul className={styles.rowseat}>
        {
         seatsArray.map((seat,index)=>{
            return(
               <Seat key={index} seat={seat} index={index} rowName={props.row.name}/>
            )
          })  
        }
       </ul>
        </div>
       
    </li>
     
    );
}

export default Row;