import React from 'react';
import styles from './Stain.module.scss';
import stainButtonImage from '../../assets/images/stain-button.png';
import stainLogoImage from '../../assets/images/stain-logo.png';

const Stain = ({ type }) => {
  return(
    <div className={type === 'button' ? styles.stainButton : styles.stainLogo}>
     <img className={styles.stainImage} src={type === 'button' ? stainButtonImage : stainLogoImage} alt="Stain"/>
    </div>
  )
}

export default Stain;