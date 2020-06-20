import React from 'react';
import styles from './Heading.module.scss';
import PropTypes from 'prop-types';

const Heading = ({tag: Tag, children}) => {
  return(
    <Tag className={Tag === 'h1' ? styles.headingPrimary : Tag === 'h2' ? styles.headingSecondary : styles.headingTertiary}>
      {children}
    </Tag>
  )
}

Heading.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.string.isRequired,
}

Heading.defaultProps = {
  tag: 'h1',
}

export default Heading;