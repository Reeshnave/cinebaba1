import React from 'react';
import { Outlet, Link } from "react-router-dom";
import styles from './Moviecard.module.css'


function Moviecard(props) {
    const movie = props.movie
    return (
      <Link to={"/movie/"+movie._id} className={styles.tittle}>
          <li key={movie._id} className={styles.moviecard}>
          
          <img src={movie.image} alt={movie.Tittle+"thumbnail"}></img>
        <h2>
       {movie.Tittle}
        </h2>
        <span>
      {movie.Catogary}
</span>
   
</li>
          </Link>
    
  
    
    
     
       

        
    );
}

export default Moviecard;