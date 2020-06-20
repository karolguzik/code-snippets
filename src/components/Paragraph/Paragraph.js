import React from 'react'
import styles from './Paragraph.module.scss'
import PropTypes from 'prop-types';

const Paragraph = ({children, center}) => {
  return(
    <p className={center ? styles.center : styles.paragraph}>{children}</p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Paragraph;