import React from 'react';
import Topbar from './Topbar';
import Nav from './Nav';
import NavItem from './NavItem';

// styles
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Topbar />
      <Nav>
        <NavItem title='LUA' url='/' />
        <NavItem title='Gallery' url='/gallery' />
        <NavItem title='MeuMeu' url='/meumeu' />
      </Nav>
    </div>
  );
};

export default Header;
