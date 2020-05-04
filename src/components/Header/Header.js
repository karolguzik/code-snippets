import React from 'react';
import styles from './Header.module.scss';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import Button from '../Button/Button';

const Header = () => {
  return(
    <header className={styles.header}>
      <HeaderLogo />
      <HeaderNav />
      <Button />
    </header>
  )
}

export default Header;