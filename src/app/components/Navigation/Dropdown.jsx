import React from 'react';
import styles from './DropDown.module.scss';


const DropDown = (props) => {
  return <ul className={styles.dropdown_menu}>{props.children}</ul>;
};

export default DropDown;
