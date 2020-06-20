import React from 'react';
import styles from './Stain.module.scss';
import stainButtonImage from '../../assets/images/stain-button.png';
import stainLogoImage from '../../assets/images/stain-logo.png';
import PropTypes from 'prop-types';

const Stain = ({ type }) => {
  return(
    <div className={type === 'logo' ? styles.stainLogo : styles.stainButton}>
      <img className={styles.stainImage} src={type === 'logo' ? stainLogoImage : stainButtonImage} alt="Stain"/>
    </div>
  )
}

Stain.propTypes = {
  type: PropTypes.string,
}

Stain.defaultProps = {
  type: 'button',
}

export default Stain;