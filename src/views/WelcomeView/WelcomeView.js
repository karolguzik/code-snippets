import React from 'react';
import bgcImage from '../../assets/images/bgc.png';
import styles from './WelcomeView.module.scss';
import Heading from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';

const WelcomeView = () => {
  return (
    <>
      <Heading>Welcome in Code Snippets!</Heading> 
      <Paragraph center>Create your own snippets for each technologies. It's realy simple!</Paragraph>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={bgcImage} alt="Welcome background"/>
      </div>
    </>
  )
}

export default WelcomeView;