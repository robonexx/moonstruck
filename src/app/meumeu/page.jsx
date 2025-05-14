'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './meumeu.scss';
import Body1 from '@/components/Body1';
import Body2 from '@/components/Body2';
import Body3 from '@/components/Body3';
import ParagraphWord from '../animations/ParagraphWord';
import Coffee from '@/components/coffee/Coffee';

const para1 = (
  <ParagraphWord>
    <p>
      Your <span className='specialWord'>voice </span>is the special
      <span className='specialWord'> place,</span> where my
      <span className='specialWord'> soul</span> remembers how to
      <span className='specialWord'> breathe</span>
    </p>
  </ParagraphWord>
);

const para2 = (
  <ParagraphWord>
    <p>
      Being with you feels like a <span className='specialWord'>dream, </span>
      but every glance, every <span className='specialWord'>breath,</span>,
      reminds me, it’s <span className='specialWord'>real. </span>
      And maybe that’s what makes it scary, not because I doubt it, but because
      it <span className='specialWord'>feels so good, </span>
      <span className='specialWord'>so true, </span>like something I’ve waited
      for without knowing.
      <br />I opened my <span className='specialWord'>heart, </span>
      trembling but ready, and <span className='specialWord'>you met me, </span>
      not with fear,{' '}
      <span className='specialWord'>but with your own wide open. </span>
      Now we give each other what this life rarely offers, <br />
      <span className='specialWord'>love that sees, </span>
      <br />
      <span className='specialWord'>love that feels, </span>
      <br />
      <span className='specialWord'>love that says: </span>
      <br />
      “In my heart, I choose you”
    </p>
  </ParagraphWord>
);

const para3 = (
  <ParagraphWord>
    <p>
      First, you filled my mornings with{' '}
      <span className='specialWord'>love</span> by turning my{' '}
      <span className='specialWord'>coffee </span>
      into something that reminded me of{' '}
      <span className='specialWord'>you. </span>
      Then, you took <span className='specialWord'>time from your day, </span>
      not out of obligation, But to{' '}
      <span className='specialWord'>be with me, </span> meeting me halfway And
      in that <span className='specialWord'>moment </span>, I felt the beauty of{' '}
      <span className='specialWord'>being chosen, </span>
      in the quietest, most meaningful way. Thank you, for simply{' '}
      <span className='specialWord'>being you. ❤️</span>
    </p>
  </ParagraphWord>
);

const radius = 60; // radius of circle
const duration = 4; // seconds

const Meumeu = () => {
  const ref1 = useRef(null);
  const inView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const inView2 = useInView(ref2, { once: true });

  const ref3 = useRef(null);
  const inView3 = useInView(ref3, { once: true });

  const ref4 = useRef(null);
  const inView4 = useInView(ref4, { once: true });

  const ref5 = useRef(null);
  const inView5 = useInView(ref5, { once: true });

  const ref6 = useRef(null);
  const inView6 = useInView(ref6, { once: true });

  const ref7 = useRef(null);
  const inView7 = useInView(ref7, { once: true });

  const ref8 = useRef(null);
  const inView8 = useInView(ref8, { once: true });

  return (
    <div className='main'>
      <div className='meumeu'>
        <section>
          <motion.h2
            ref={ref1}
            initial={{ opacity: 0, x: -50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Meu coração❤️
          </motion.h2>
          <Body2 />
        </section>
        <section>
          <motion.h2
            ref={ref2}
            initial={{ opacity: 0, x: 50 }}
            animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Você é a coisa mais linda deste mundo❤️
          </motion.h2>
          <Body1 />
        </section>
      </div>
      {para1}
      <section>
        <motion.h2
          ref={ref3}
          initial={{ opacity: 0, y: 100 }}
          animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Meu Amor❤️
        </motion.h2>
        <Body3 />
      </section>
      <section>{para2}</section>
       <Coffee />
      <section>{para3}</section>
     
      <div className='bottom'>
        <h2>
          Você é minha lua{' '}
          <motion.span
            ref={ref5}
            initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
            animate={
              inView5
                ? {
                    x: [0, 70, 140, 70, 0],
                    y: [0, -70, 0, 70, 0],
                    rotate: [0, 90, 180, 270, 360],
                    opacity: 1,
                  }
                : { opacity: 0 }
            }
            transition={{
              duration: 4,
              ease: 'easeInOut',
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
          >
            🌕
          </motion.span>
        </h2>

        <h2>
          E eu sou seu sol{' '}
          <motion.span
            ref={ref5}
            initial={{ x: 140, y: 0, rotate: 0, opacity: 0 }}
            animate={
              inView5
                ? {
                    x: [140, 70, 0, 70, 140, 0],
                    y: [0, 70, 0, -70, 0],
                    rotate: [0, 90, 180, 270, 360],
                    opacity: 1,
                  }
                : { opacity: 0 }
            }
            transition={{
              duration: 4,
              ease: 'easeInOut',
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
          >
            ☀️
          </motion.span>
        </h2>

        <p>
          <motion.span
            ref={ref6}
            initial={{ opacity: 0 }}
            animate={inView6 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 3.6, ease: 'easeInOut' }}
          >
            ❤️
          </motion.span>
          <motion.span
            ref={ref7}
            initial={{ opacity: 0 }}
            animate={inView7 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 3.8, ease: 'easeInOut' }}
          >
            ❤️
          </motion.span>
          <motion.span
            ref={ref8}
            initial={{ opacity: 0 }}
            animate={inView8 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 4, ease: 'easeInOut' }}
          >
            ❤️
          </motion.span>
        </p>
      </div>
    </div>
  );
};

export default Meumeu;
