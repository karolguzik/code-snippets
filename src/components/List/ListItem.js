import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ListItem.module.scss';
import pinBlue from '../../assets/images/pin-blue.png';
import pinRed from '../../assets/images/pin-red.png';
import pinYellow from '../../assets/images/pin-yellow.png';
import pinPink from '../../assets/images/pin-pink.png';
import PropTypes from 'prop-types';

const ListItem = ({ title, id, type}) => {
  const pinColor = {
    html: pinPink,
    css: pinRed,
    javascript: pinYellow,
    react: pinBlue
  } 
  return (
    <Link className={styles.link} to={'/snippet/' + id}>
      <li className={styles.wrapper}>
        <h2 className={styles.heading}>{title}</h2>
        <img className={styles.pin} src={pinColor[type]} alt="Pin"/>
      </li>
    </Link>
  )
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
}

export default ListItem;