'use client'
import React, { useState, useEffect, useCallback, CSSProperties } from 'react';
import { useRouter } from 'next/navigation';
import styles from './DropDown.module.scss';

interface DropDownItemProps {
  title: string;
  url: string;
  icon: React.ReactNode;
    children?: React.ReactNode;
    style?: CSSProperties;
}

const DropDownItem: React.FC<DropDownItemProps> = (props) => {
  const [click, setClick] = useState<boolean>(false);


  const closeMobileMenu = useCallback(() => {
    setClick(false);
  }, []);


  return (
    <li className={styles.dropdown_item}>
      <a
        href={props.url}
        onClick={closeMobileMenu}
        className={styles.dropdown_link}
      >
        <span className={styles.link_icon}>{props.icon}</span>
        <span className={styles.link_title}>{props.title}</span>
      </a>
      {click && props.children}
    </li>
  );
};

export default DropDownItem;
