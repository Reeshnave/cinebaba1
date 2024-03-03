import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { selectSeat } from '../../feature/screen/screenSlice';
import styles from './seat.module.css';

function Seat(props) {

  
 const [className,setClassName] =useState(styles.seats)
  const [status, setStatus] =useState('avalible')
  const dispatch = useDispatch()
  const seatnumber = props.index+1

    function handleSelect(){
     
      dispatch(selectSeat({rowName:props.rowName,seatnumber:seatnumber}))
      if(status === 'avalible'){
      setStatus('selected')
      }
      else{
        setStatus('avalible')
      }
    }
    return (
        <li className={styles.seats + " " + (status === "selected"?styles.Selected:"")}onClick={()=>{handleSelect()}}>
        <span>{seatnumber}</span>
       </li>
    );
}

export default Seat;