import React from 'react';
import styles from './HeaderNav.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
  return(
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <NavLink exact to="/" className={styles.navigationItem} activeClassName={styles.navigationItemActive}>HTML</NavLink>
        <NavLink to="/css" className={styles.navigationItem} activeClassName={styles.navigationItemActive}>CSS</NavLink>
        <NavLink to="/javascript" className={styles.navigationItem} activeClassName={styles.navigationItemActive}>JavaScript</NavLink>
        <NavLink to="/react" className={styles.navigationItem} activeClassName={styles.navigationItemActive}>React</NavLink>
      </ul>
    </nav>
  )
}

export default HeaderNav;