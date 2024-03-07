import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { deselectedSeat, selectSeat } from '../../feature/screen/screenSlice';
import styles from './seat.module.css';

function Seat(props) {

  
 const [className,setClassName] =useState(styles.seats)
  const [status, setStatus] =useState('avalible')
  const dispatch = useDispatch()
  const seatnumber = props.index+1

    function handleSelect(){
     
     
      if(status === 'avalible'){
      setStatus('selected')
      dispatch(selectSeat({rowName:props.rowName,seatnumber:seatnumber}))
      }
      else{
        setStatus('avalible')
        dispatch(deselectedSeat({rowName:props.rowName,seatnumber:seatnumber}))
      }
    }
    return (
        <li className={styles.seats + " " + (status === "selected"?styles.Selected:"")}onClick={()=>{handleSelect()}}>
        <span>{seatnumber}</span>
       </li>
    );
}

export default Seat;