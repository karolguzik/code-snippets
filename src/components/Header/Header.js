import React from 'react';
import styles from './Header.module.scss';
import { withRouter } from 'react-router-dom';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import Search from '../Search/Search';
import Button from '../Button/Button';
import Stain from '../Stain/Stain';
import PropTypes from 'prop-types';

const Header = ({ location: { pathname }}) => {
  const searchActiveTypes = ['/html', '/css', '/javascript', '/react'];
  const search = searchActiveTypes.map(el => el === pathname ? <Search /> : null)

  return(
    <header className={styles.header}>
      <Stain type='logo' />
      <Stain />
      <HeaderLogo />
      <HeaderNav />
      {search}
      <Button />
    </header>
  )
}

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  })
}

export default withRouter(Header);