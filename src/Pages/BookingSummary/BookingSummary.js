import React, { useState } from 'react';
import axios from 'axios';
import styles from './BookingSummary.module.css'
import { useSelector } from 'react-redux';


function BookingSummary(props) {
    const [loader,setLoader] = useState(false)
    const selectedSeats =useSelector(state=>state.screen.selectedSeats)
    const totalPrice = useSelector(state=>state.screen.totalPrice)
    const show =useSelector(state=>state.screen.selectedShow)
   
     const handleSubmit= (e)=>{
     e.preventDefault(); 
     setLoader(true)
     const form = e.target
     const email= form['email'].value
     const phone = form['phone'].value
     const bookingPayload = {
        email :email,
        phone :phone,
        selectedSeats: selectedSeats,
        show:show
     }
     console.log(bookingPayload)
      axios.post('http://localhost:3000/bookings',bookingPayload)
      .then(res=>{
        setLoader(false)
        console.log(res)
      })
      .catch(err=>{
        setLoader(false)
        console.log(err)
      })
     }
    return (
        <main className={styles.bookingmain}>
            <div className={styles.Summary}>
                <h2>Booking Summary</h2>
                <ul className={styles.summaryul}>
                    {
                       selectedSeats.map((seat,index)=>{
                        return(
                            <li className={styles.selectedbooking} key={index}>
                                <h3>{seat.rowName}-{seat.seatnumber}</h3>
                              
                            </li>
                        )

                       })
                    }
                </ul>
 <form className={styles.bokkingform} onSubmit={handleSubmit}>
  
    <label htmlFor='phone'>Phone:</label>
    <input type="text" id='phone' name="Phone " />
  
    <label htmlFor='email'>Email:</label>
    <input type="email" id='email' name="email" />
  
  <button className={styles.checkout} type='submit'> confirm booking Pay Rs {totalPrice}</button>

</form>
           
            </div>
        </main>
    );
}

export default BookingSummary;