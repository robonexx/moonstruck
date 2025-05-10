'use client';
import React, { useContext } from 'react';
import { AiFillMail } from 'react-icons/ai';
import { CursorContext } from '@/components/Cursor/CursorProvider';
import { motion } from 'framer-motion';

// styles
import styles from './TopMenu.module.scss';



const Topbar = () => {
  const { setSize } = useContext(CursorContext);
  return (
    <div className={styles.top_menu}>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        href='/'
        onMouseEnter={() => {
          setSize('large');
        }}
        onMouseLeave={() => setSize('small')}
      >
        MEU MEU 2.0
      </motion.a>
      <div
        onMouseEnter={() => {
          setSize('large');
        }}
        onMouseLeave={() => setSize('small')}
      >
        <motion.a
          href='/'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <h2 className={styles.sub}>Between words and breaths</h2>
        </motion.a>
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      >
         <h2 className={styles.sub}>By Robert Wägar</h2>
      </motion.button>
    </div>
  );
};

export default Topbar;
