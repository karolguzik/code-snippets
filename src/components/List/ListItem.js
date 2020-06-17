import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ListItem.module.scss';
import pin from '../../assets/images/pin-blue.png';


const ListItem = ({ title, id }) => {
  return (
    <Link className={styles.link} to={'/snippet/' + id}>
      <li className={styles.wrapper}>
        <h2 className={styles.heading}>{title}</h2>
        <img className={styles.pin} src={pin} alt="Pin"/>
      </li>
    </Link>
  )
}

export default ListItem;