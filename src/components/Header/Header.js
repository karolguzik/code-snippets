import React from 'react';
import styles from './Header.module.scss';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import Button from '../Button/Button';
import Stain from '../Stain/Stain';

const Header = () => {
  return(
    <header className={styles.header}>
      <Stain />
      <Stain type='button'/>
      <HeaderLogo />
      <HeaderNav />
      <Button />
    </header>
  )
}

export default Header;