'use client';

import React, { useContext, useState, useEffect, useRef } from 'react';
import { CursorContext } from '@/components/Cursor/CursorProvider';
import { getMoonPhase, swedenFullMoons2025 } from '@/scripts/moon';
import { quotes, deepQuotes, fullmoonQuotes } from '@/scripts/erika';
import { initSky } from '@/scripts/sky';
import { motion } from 'framer-motion';
import './page.scss';
import RobSvg from '@/components/robsvg/RobSvg';

const Home = () => {
  const [showLoadingSection, setShowLoadingSection] = useState(true);
  const { setSize } = useContext(CursorContext);
  const [moonPhase, setMoonPhase] = useState({ src: '', phase: '' });
  const poemRef = useRef(null);
  const deepBtnRef = useRef(null);
  const oneMoreBtnRef = useRef(null);
  const writerTokenRef = useRef(0);
  const currentSourceRef = useRef(
    () => quotes[Math.floor(Math.random() * quotes.length)]
  );

  useEffect(() => {
    const CHAR_DELAY = 45;
    const FADE_DURATION = 300;

    const today = new Date();
    const todayISO = today.toISOString().split('T')[0];
    /*  const currentMoon = getMoonPhase(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate()
    ); */
    const currentMoon = getMoonPhase(today);
    setMoonPhase(currentMoon);

    const makeRotator = (arr, key) => {
      const ORDER_KEY = `${key}-order`;
      const POINTER_KEY = `${key}-ptr`;
      return () => {
        let order = JSON.parse(localStorage.getItem(ORDER_KEY));
        let pointer = parseInt(localStorage.getItem(POINTER_KEY), 10);
        if (!order || order.length !== arr.length) {
          order = [...Array(arr.length).keys()].sort(() => Math.random() - 0.5);
          pointer = 0;
        }
        const idx = order[pointer];
        pointer = (pointer + 1) % arr.length;
        localStorage.setItem(ORDER_KEY, JSON.stringify(order));
        localStorage.setItem(POINTER_KEY, pointer.toString());
        return arr[idx];
      };
    };

    const deepQuote = makeRotator(deepQuotes, 'erika-deep');
    const fullQuote = makeRotator(fullmoonQuotes, 'erika-full');

    const isFullMoon = swedenFullMoons2025.includes(todayISO);

    let initialSource;

    if (isFullMoon) {
      initialSource = fullQuote;
    } else {
      // First load, show quotes[0], then change to random after first click or reload
      let firstShown = false;
      initialSource = () => {
        if (!firstShown) {
          firstShown = true;
          // On next call, switch to random from rest
          currentSourceRef.current = () => {
            const altQuotes = quotes.slice(1);
            return altQuotes[Math.floor(Math.random() * altQuotes.length)];
          };
          return quotes[0];
        }
        const altQuotes = quotes.slice(1);
        return altQuotes[Math.floor(Math.random() * altQuotes.length)];
      };
    }

    // Set the current source getter function
    currentSourceRef.current = () => initialSource();

    const typeWriter = (text, el) => {
      if (!el) return;
      writerTokenRef.current += 1;
      const currentToken = writerTokenRef.current;
      el.innerHTML = '';

      const write = (i) => {
        if (writerTokenRef.current !== currentToken) return;
        if (i >= text.length) return;

        if (text[i] === '\n') {
          el.appendChild(document.createElement('br'));
          return write(i + 1);
        }
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.opacity = '0';
        span.style.transition = `opacity ${FADE_DURATION}ms ease`;
        el.appendChild(span);
        requestAnimationFrame(() => (span.style.opacity = '1'));
        setTimeout(
          () => write(i + 1),
          text[i] === ' ' ? CHAR_DELAY / 2 : CHAR_DELAY
        );
      };

      write(0);
    };

    const showInitialQuote = () => {
      typeWriter(currentSourceRef.current(), poemRef.current);
    };

    const handleDeepClick = () => {
      currentSourceRef.current = () => deepQuote();
      typeWriter(currentSourceRef.current(), poemRef.current);
    };

    const handleOneMoreClick = () => {
      typeWriter(currentSourceRef.current(), poemRef.current);
    };

    showInitialQuote();

    deepBtnRef.current?.addEventListener('click', handleDeepClick);
    oneMoreBtnRef.current?.addEventListener('click', handleOneMoreClick);

    return () => {
      deepBtnRef.current?.removeEventListener('click', handleDeepClick);
      oneMoreBtnRef.current?.removeEventListener('click', handleOneMoreClick);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingSection(false);
    }, 5800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    initSky();
  }, []);

  return (
    <main className='main'>
      <RobSvg />
      <div className='overlay'></div>
      <div className='underlay'></div>
      <button
        onClick={() => {
          localStorage.setItem('showSplashAgain', 'true');
          window.location.reload(); // This will reload and RootLayout will see the flag
        }}
        className='see-intro-again-button'
      >
        See Intro Again
      </button>

      <div className='svg'>
        <svg viewBox='0 0 201.33 202.05' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <linearGradient
              id='linearGradient12950'
              x1='125.3'
              x2='-73.179'
              y1='112.09'
              y2='229.18'
              gradientTransform='translate(-4.9976 -36.054)'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#f8f8f8' offset='0' />
              <stop stopColor='#7d7d7d' stopOpacity='0' offset='1' />
            </linearGradient>
          </defs>
          <path
            id='line1'
            className='line'
            d='m98.701 1.0913c-0.17564 35.326-0.70705 35.288-0.55934 104.5-0.98149 63.191-0.94097 63.228-0.51204 95.759'
          />
          <path
            id='line2'
            className='line'
            d='m99.238 1.7849c3.7511 32.869 80.683 75.31-4.4858 106.02-87.976 41.542 2.1632 61.642 3.4149 93.881'
          />
          <g transform='translate(-5.3546 -35.697)'>
            <path
              id='line3'
              className='line'
              d='m104.42 37.502c-3.7511 32.869-83.895 76.024 1.273 106.74 87.976 41.542-1.8062 61.285-3.0579 93.524'
            />
          </g>
        </svg>
      </div>

      <div className='imageHolder'>
        {moonPhase.src && <img src={moonPhase.src} alt='Moon Phase' />}
        {/*  <div id='phase'>{moonPhase.phase}</div> */}
      </div>

      <div className='poem-wrapper'>
        <div ref={poemRef} className='poem'></div>
      </div>

      <div className='video-bg'>
        <video autoPlay muted loop>
          <source src='/sky.webm' type='video/webm' />
        </video>
      </div>

      <div className='button-wrapper'>
        <button ref={oneMoreBtnRef} className='deep-btn'>
          Mer kärlek tack!
        </button>
        <button ref={deepBtnRef} className='deep-btn' disabled>
          Djupare! men inte än...
        </button>
      </div>
    </main>
  );
};

export default Home;
