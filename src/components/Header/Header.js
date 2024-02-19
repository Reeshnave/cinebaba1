import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <div><header> <div className={styles.logooo}> <div className={styles.logo}>
        &nbsp;
      </div>
      <span>Cinibaba</span></div>
    
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='#'>About</Link>
          </li>
          <li>
            <Link to='/movies'>Movies</Link>
          </li>
          <li>
            <Link to='#'>Contact</Link>
          </li>
        </ul>
      </nav></header>
           
        </div>
    );
}

export default Header;