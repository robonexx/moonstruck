'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './meumeu.scss';
import Body1 from '@/components/Body1';
import Body2 from '@/components/Body2';
import Body3 from '@/components/Body3';
import ParagraphWord from '../animations/ParagraphWord';

const para1 = (
  <ParagraphWord>
    <p>
      Your <span className='specialWord'>voice</span> is the special
      <span className='specialWord'>place,</span> where my
      <span className='specialWord'>soul</span> remembers how to
      <span className='specialWord'>breathe</span>
    </p>
  </ParagraphWord>
);

const para2 = (
  <ParagraphWord>
    <p>
      Being with you feels like a <span className='specialWord'>dream,</span>
      but every glance, every <span className='specialWord'>breath,</span>,
      reminds me, it’s <span className='specialWord'>real.</span>
      And maybe that’s what makes it scary, not because I doubt it, but because
      it <span className='specialWord'>feels so good,</span>
      so true, like something I’ve waited for without knowing.
      <br />I opened my <span className='specialWord'>heart,</span>
      trembling but ready, and <span className='specialWord'>you met me,</span>
      not with fear,
      <span className='specialWord'>but with your own wide open. </span>
      Now we give each other what this life rarely offers, <br />
      <span className='specialWord'>love that sees,</span>
      <br />
      <span className='specialWord'>love that feels,</span>
      <br />
      <span className='specialWord'>love that says:</span>
      <br />
      “In my heart, I choose you”
    </p>
  </ParagraphWord>
);

const Meumeu = () => {
  const ref1 = useRef(null);
  const inView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const inView2 = useInView(ref2, { once: true });

  const ref3 = useRef(null);
  const inView3 = useInView(ref3, { once: true });

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
      <div style={{ height: '50vh' }}>...❤️❤️❤️...</div>
    </div>
  );
};

export default Meumeu;
