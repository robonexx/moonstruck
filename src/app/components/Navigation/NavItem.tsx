'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Navbar.module.scss';

interface NavItemProps {
  title: string;
  url: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const [click, setClick] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 300) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const closeMobileMenu = useCallback(() => {
    setClick(false);
  }, []);

  return (
    <li
      className={styles.nav_item}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a
        href={props.url}
        onClick={closeMobileMenu}
        className={styles.nav_links}
      >
        <span className={styles.link_icon}>{props.icon}</span>
        <span className={styles.link_title}>{props.title}</span>
      </a>
      {dropdown && props.children}
      {click && props.children}
    </li>
  );
};

export default NavItem;
