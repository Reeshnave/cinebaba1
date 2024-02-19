import React from 'react';
import styles from './seat.module.css'
function Seat(props) {
    return (
        <li className={styles.seats}>
        <span>{props.seatnumber}</span>
       </li>
    );
}

export default Seat;