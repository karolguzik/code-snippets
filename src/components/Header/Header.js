import React from 'react';
import styles from './Header.module.scss';
import withContext from '../../hoc/withContext';
import { withRouter } from 'react-router-dom';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import Search from '../Search/Search';
import Button from '../Button/Button';
import Stain from '../Stain/Stain';
import PropTypes from 'prop-types';

const Header = ({ location: { pathname }, appContext: { openModal }}) => {
  const searchActiveTypes = ['/html', '/css', '/javascript', '/react'];
  const search = searchActiveTypes.map(el => el === pathname ? <Search key={el}/> : null)

  return(
    <header className={styles.header}>
      <Stain type='logo' />
      <Stain />
      <HeaderLogo />
      <HeaderNav />
      {search}
      <Button onClick={openModal}>Add snippet</Button>
    </header>
  )
}

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  appContext: PropTypes.shape({
    openModal: PropTypes.func.isRequired,
  }).isRequired,
}

export default withContext(withRouter(Header));