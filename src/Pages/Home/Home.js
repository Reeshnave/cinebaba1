import React, { useEffect } from 'react';
import Moviecard from '../../components/Moviecard/Moviecard';

import axios from 'axios';
import styles from './Home.module.css'
import { useLoaderData } from 'react-router-dom';
export async function loader(){
  const res = await axios.get('http://localhost:3000/movies')
  const data = res.data
  return{data};

}

function MoviePages(props) {

const{data}= useLoaderData()
   
    return (
        <main>
            <section ><div className={styles.container}>
        <h1>
          Recommended Movies
        </h1>
        <ul className={styles.movielist}>
          {
            data.map((movie,index)=>{
              return <Moviecard key={movie._id} movie={movie}/>
            })
          }        
        </ul>
        </div>
       
      </section>
            
        </main>
    );
}

export default  MoviePages;