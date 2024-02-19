import axios from 'axios';
import React from 'react';
import {useLoaderData ,Link} from 'react-router-dom';
import styles from './Selectshowspage.module.css'
import dayjs from 'dayjs';

export async function loader({params}) {
    const Res = await axios.get('http://localhost:3000/movies/'+params.movieId+"/shows")
   const shows = Res.data
    return{shows}

 }

function Selectshowpage(props) {
    const {shows} = useLoaderData()
    console.log(shows)
    return (
        <main>
            <section className={styles.container}>
                <h2 className={styles.sizeh2}>
                    Shows available
                </h2>
                <ul className={styles.ulsextion} >{
                     shows.map(show=>{
                        return(
                            <Link to={'/select-seat/'+show._id} className={styles.linksyte}> <li key={show._id} className={styles.lisections}>
                            <span>screen {show.screen.screen}</span>
                            <span>{dayjs(show.showtime).format('DD MMM ,HH:mm')}</span>
                        </li></Link>
                           
                        )

                     })
                    }
                </ul>
            </section>
        </main>
    );
}

export default Selectshowpage;