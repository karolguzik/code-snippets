import React from 'react';
import styles from './Header.module.scss';
import { withRouter } from 'react-router-dom';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import Search from '../Search/Search';
import Button from '../Button/Button';
import Stain from '../Stain/Stain';

const Header = ({ location: { pathname }}) => {
  const searchActiveTypes = ['/html', '/css', '/javascript', '/react'];
  const search = searchActiveTypes.map(el => el === pathname ? <Search /> : null)
  // const search = searchActiveTypes.filter(el => el === pathname);
  // console.log(search)

  return(
    <header className={styles.header}>
      <Stain />
      <Stain type='button'/>
      <HeaderLogo />
      <HeaderNav />
      {/* <Search />  */}
      {/* {search.length !== 0 && <Search />} */}
      {search}
      <Button />
    </header>
  )
}

export default withRouter(Header);