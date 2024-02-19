import React from 'react';
import axios from 'axios';
import styles from './Selectseat.module.css'

import Tier from '../../components/Tier/Tier';
import { useLoaderData } from 'react-router-dom';


export async function loader({params}) {
    const Res = await axios.get('http://localhost:3000/shows/'+params.showId)
     const show = Res.data
    return{show}
}
function Selectseat(props) {
    const {show} = useLoaderData()
    console.log(show)
    const screen =show.screen
    return (
        <main className={styles.seatsmain}>
            
            <ul className={styles.seatsalinment}>
    {
        screen.tiers.map( tier=>{
           return(
            <Tier key={tier._id} tier={tier}/>
           )})
    }

            </ul>
            <div className={styles.screendiv}></div>
        </main>
    );
}

export default Selectseat;