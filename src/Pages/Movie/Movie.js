import React from 'react';
import styles from './Movie.module.css'

import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';


 export async function loader({params}) {
    const res = await axios.get('http://localhost:3000/movies/'+params.movieId)
    const movie = res.data
    
  const castRes = await axios.get('http://localhost:3000/movies/'+params.movieId+"/cast")
   const casts = castRes.data
    return{movie,casts}

 }



function Movie(props) {

    const{movie,casts}= useLoaderData()
    console.log(casts)
    
    return (
        <main>
            <section className={styles.section1}>
                <section className={styles.container}>
                 <div className={styles.rightside}>
                <img className={styles.photo}  src={movie.image} alt={movie.Tittle +"poster"}/>
                   <div><h2 className={styles.heading}>{movie.Tittle}</h2>
                    <div >
                        <div className={styles.row}>
                        <div className={styles.bottamarea}>
                            <span>Add your rating & review</span>
                            <span>Your ratings matter</span>
                        </div>
                        <div>
                            <button className={styles.ratebutton}>Rate now</button>
                        </div>
                        </div>
                       
                        <div className={styles.language}>
                            <button className={styles.malayalam}>2D</button>
                            <button  className={styles.malayalam}>{movie.Language}</button>
                        </div>
                        <div className={styles.categoryarea}>
                            <span className={styles.category}>2h 35m</span>
                            <span  className={styles.category}>
                            {movie.Catogary}
                            </span>
                            <span  className={styles.catgory}>
                           22 jan 2023
                            </span>
                        </div>
                        <div className={styles.bookingarea}>
                            <Link  className={styles.booking} to={'/select-show/'+movie._id}>Book now</Link>
                       
                        </div>
                        </div>
                </div>
               </div> 

            </section></section>
            
            <section className={styles.section2area}>
                <div className={styles.container}>
                    <div> <h2 className={styles.castehead}>About</h2>
                    <span className={styles.spansection}>
                        {movie.Discription}
                    </span></div>
                   
              
                
                <div className={styles.castess} >
                    <h2 className={styles.castehead}>
                        Caste
                    </h2>
                    <ul className={styles.casteraw}>
                        {
                            casts.map( cast=>{
                                return(
                                    <li key={cast._id} className={styles.casteli}>
                                        <img src={cast.persons.Image} alt='' className={styles.casteimage}/>
                                         <h2 className={styles.casteh2}>{cast.persons.name}</h2>
                                         <span>{cast.role}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                        
                    
                </div>
                </div>
            </section>
            
        </main>
    );
}

export default Movie;