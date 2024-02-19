import React from 'react';
import Seat from '../Seats/Seat';
import styles from './Row.module.css'

function Row(props) {
    return (
        <li  className={styles.rows}>
        <h4>{props.row.name}</h4>
        <div className={styles.rowcenter}>
        <ul className={styles.rowseat}>
        {
         props. row.seats.map(seat=>{
            return(
               <Seat key={seat._id} seatnumber={seat.seatnumber}/>
            )
          })  
        }
       </ul>
        </div>
       
    </li>
     
    );
}

export default Row;