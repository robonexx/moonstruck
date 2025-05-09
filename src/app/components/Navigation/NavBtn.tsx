'use client'
import React from 'react';
import styles from './NavBtn.module.scss';
import {motion} from 'framer-motion'

interface NavBtnProps {
  handleClick: () => void;
  navActive: boolean;
}

const NavBtn: React.FC<NavBtnProps> = ({ handleClick, navActive }) => {
  return (
    <motion.div
      className={`${styles.navBtn} ${navActive ? styles.open : styles.navBtn}`}
      onClick={handleClick}
      initial={{opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{delay: 0, duration: 0.3}}
    >
      <div className={styles.line}></div>
    </motion.div>
  );
};

export default NavBtn;
