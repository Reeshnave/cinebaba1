import React, { useEffect } from 'react';
import axios from 'axios';
import styles from './Selectseat.module.css'
import Tier from '../../components/Tier/Tier';
import { Link, useLoaderData } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import { addTiers, selectShow } from '../../feature/screen/screenSlice';



export async function loader({params}) {
    const Res = await axios.get('http://localhost:3000/shows/'+params.showId)
     const show = Res.data
     const showId =params.showId
    return{show,showId}
}
function Selectseat(props) {
    const dispatch = useDispatch()
    const {show,showId} = useLoaderData()
    const screen =show.screen
    const screenData = useSelector(state=> state.screen)
    const totalPrice =useSelector(state=>state.screen.totalPrice)
    console.log(screenData)

    useEffect(()=>{
       dispatch(addTiers(screen.tiers))
       
    },[])
    const handleSeatConfirmation = ()=>{
          dispatch(selectShow(showId))
    }
     

    return (
        <main className={styles.seatsmain}>
            
            <ul className={styles.seatsalinment}>
    {
        screenData.tiers.map(tier=>{
           return(
            <Tier key={tier._id} tier={tier}/>
           )})
    }

            </ul>
            <div className={styles.screendiv}></div>
            <button onClick={handleSeatConfirmation} className={styles.checkoutButton} to="/booking-summary">Pay Rs {totalPrice}</button>
        </main>
    );
}

export default Selectseat;