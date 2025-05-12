'use client';
import React from 'react';
import { motion } from 'framer-motion';

// styles
import styles from './TopMenu.module.scss';



const Topbar = () => {
  return (
    <div className={styles.top_menu}>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        href='/'
      >
        MEU MEU 2.0
      </motion.a>
      <div
      >
      </div>
    </div>
  );
};

export default Topbar;
