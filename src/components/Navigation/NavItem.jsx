'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Navbar.module.scss';

const NavItem= (props) => {
  const [click, setClick] = useState(false);

/*   const onMouseEnter = () => {
    if (window.innerWidth < 300) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    setDropdown(false);
  }; */

  const closeMobileMenu = useCallback(() => {
    setClick(false);
  }, []);

  return (
    <li
      className={styles.nav_item}
     /*  onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave} */
    >
      <a
        href={props.url}
        onClick={closeMobileMenu}
        className={styles.nav_links}
      >
        <span className={styles.link_title}>{props.title}</span>
      </a>
      {click && props.children}
    </li>
  );
};

export default NavItem;
