'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './Hero.module.scss';

const Hero = () => {
  const heroRef = useRef(null);
  const instaRef = useRef(null);
  const title2Ref = useRef(null);
  const buttonRef = useRef(null);
  /* const overlayRef = useRef(null);
  const videoRef = useRef(null);
 
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null); */

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.to(heroRef.current, {
      opacity: 1,
      duration: 0.6,
      height: 'calc(100svh - 160px)',
      ease: 'power3.out',
    });
    tl.to(instaRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: 'power3.out',
    });
    tl.to(title2Ref.current, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      ease: 'power3.out',
    });
    tl.to(buttonRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out',
    });
    /* tl.from(overlayRef.current, {
      opacity: 0,
      duration: 0.8,
      height: 0,
      ease: 'power3.out',
    });
    tl.from(videoRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
    tl.from(title2Ref.current, {
      x: -200,
      opacity: 0,
      duration: 0.4,
      ease: 'power3.out',
    });
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    })
      .from(
        subtitleRef.current,
        {
          x: 200,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.4' // start slightly earlier
      )
      .from(
        buttonsRef.current.children,
        {
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
        },
        '-=0.4'
      ); */
  }, []);

  return (
    <div className={styles.abouthero} ref={heroRef}>
      <div className={styles.name} ref={instaRef}>
        {' '}
        <p>Minun Rakkaani</p>
      </div>
      <div className={styles.header}>
        <div className={styles.title} ref={title2Ref}>
          <span className={styles.text}>Meu coração, minha lua,</span> <br />
          Quando você não está, sinto sua falta.
          <br />
          <span className={styles.text}>Quero te abraçar, te beijar,</span>
          <br />E nunca mais te deixar.
        </div>
        <button href='/gallery/#slider' className={styles.btn} ref={buttonRef}>
          Photos
        </button>
        <img src='/erika1.jpg' alt='' className={styles.image} />
      </div>
    </div>
  );
};

export default Hero;
