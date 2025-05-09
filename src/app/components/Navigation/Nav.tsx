'use client'
import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import NavBtn from './NavBtn';

// styles
import styles from './Navbar.module.scss';
import { CursorContext } from '@/components/Cursor/CursorProvider';

interface NavProps {
  children: React.ReactNode;
}

const Nav: React.FC<NavProps> = (props) => {
  const [click, setClick] = useState<boolean>(false);
  const [navActive, setNavActive] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { setSize } = useContext(CursorContext);

  const handleClick = () => {
    setClick(!click);
    setNavActive(!click);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 959);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 959) {
      let prevScrollpos = window.pageYOffset;

      const handleScroll = () => {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
          navRef.current?.classList.add(styles.bgorange);
          navRef.current?.classList.remove(styles.hide);
        } else {
          navRef.current?.classList.add(styles.hide);
          navRef.current?.classList.remove(styles.bgorange);
        }
        prevScrollpos = currentScrollPos;
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.2, 
        duration: 0.2
      },
    }),
  };

  return (
    <nav className={styles.navbar} ref={navRef}
      onMouseEnter={() => {
        setSize('large');
      }}
      onMouseLeave={() => setSize('small')}
    >
      <button className={styles.menu_icon} onClick={handleClick}>
        <NavBtn navActive={navActive} handleClick={handleClick} />
      </button>
      <motion.ul
        className={click ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu}
        initial="hidden"
        animate={(click || !isMobile) ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {React.Children.map(props.children, (child, i) => (
          <motion.div key={i} custom={i} variants={variants}>
            {child}
          </motion.div>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Nav;
