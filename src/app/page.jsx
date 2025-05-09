'use client';
import React, { useContext, useState, useEffect } from 'react';
import { CursorContext } from '@/components/Cursor/CursorProvider';
import GridLines from '@/components/Gridlines';

import styles from './page.module.scss';
import Button from '@/components/Button';

const Home = (props) => {
  const [showLoadingSection, setShowLoadingSection] = useState(true);
  const { setSize } = useContext(CursorContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingSection(false);
    }, 5800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>
      <>
        <div className='bg'></div>
        <GridLines />
      </>
    </main>
  );
};

export default Home;
