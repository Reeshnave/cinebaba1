import React from 'react';
import Row from '../Row/Row';
import styles from './Tier.module.css'

function Tier(props) {
    return (
        <li className={styles.tirelists}>
                <h3>{props.tier.name} - Rs{props.tier.price}</h3>
                <ul className={styles.tierrows}>
                    {
                        props.tier.rows.map(row=>{
                            return(
                              <Row key={row._id} row={row}/>
                            )
                        })
                    }
                </ul>
            </li>
    );
}

export default Tier;