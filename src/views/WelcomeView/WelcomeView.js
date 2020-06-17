import React from 'react';
import bgcImage from '../../assets/images/bgc.png';
import styles from './WelcomeView.module.scss';

const WelcomeView = () => {
  return (
    <>
      <h1 className={styles.heading}>Welcome in Code Snippets!</h1> 
      <p className={styles.paragraph}>Create your own snippets for each technologies. It's realy simple!</p>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={bgcImage} alt="Welcome background"/>
      </div>
    </>
  )
}

export default WelcomeView;