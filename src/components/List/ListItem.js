import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ListItem.module.scss';
import pinBlue from '../../assets/images/pin-blue.png';
import pinRed from '../../assets/images/pin-red.png';
import pinYellow from '../../assets/images/pin-yellow.png';
import pinPink from '../../assets/images/pin-pink.png';
import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';

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
        <Heading tag='h3'>{title}</Heading>
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