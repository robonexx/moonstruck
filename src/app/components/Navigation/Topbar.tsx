'use client';
import React, { useContext } from 'react';
import { AiFillMail } from 'react-icons/ai';
import { CursorContext } from '@/components/Cursor/CursorProvider';
import { motion } from 'framer-motion';

// styles
import styles from './TopMenu.module.scss';

// Define the type for the props, if necessary
interface TopMenuProps {}

const Topbar: React.FC<TopMenuProps> = () => {
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
        LIA Presentation
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
          <h2 className={styles.sub}>Robert Wägar FEA22STO</h2>
        </motion.a>
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      >
        <a href='/contact'>Contact</a>
      </motion.button>
    </div>
  );
};

export default Topbar;
