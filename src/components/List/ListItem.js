import React from 'react';
import styles from './ListItem.module.scss';

const ListItem = ({ title, description }) => {
  return (
    <li className={styles.wrapper}>
      <h2 className={styles.heading}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </li>
  )
}

export default ListItem;