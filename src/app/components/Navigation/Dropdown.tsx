import React from 'react';
import styles from './DropDown.module.scss';

interface DropDownProps {
  children: React.ReactNode;
}

const DropDown: React.FC<DropDownProps> = (props) => {
  return <ul className={styles.dropdown_menu}>{props.children}</ul>;
};

export default DropDown;
