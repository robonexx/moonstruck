'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './meumeu.scss';
import Body1 from '@/components/Body1';
import Body2 from '@/components/Body2';
import Body3 from '@/components/Body3';
import ParagraphWord from '../animations/ParagraphWord';

const para1 = () => {
  return (
    <>
      <p>Meu <span>coração</span>❤️ then some other text <span>Hightligted text</span> and so on</p>
    </>
  );
}

const paragraph =
  'Your #voice# is the #place# , my #soul# remembers how to #breathe#';

const paragraph2 =
  'Her voice calms me, It settles the noise inside. It warms my heart,Calms my breath. I could listen to her forever,It is not what she says, It is the way it feels when she speaks,like everything is going to be okay.';

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
       <ParagraphWord paragraph={paragraph} />
        <div style={{ height: '5vh' }}></div>
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
      <section>
        <ParagraphWord paragraph={paragraph2} />
        <div style={{ height: '5vh' }}></div>
      </section>
      <div style={{ height: '50vh' }}>...❤️❤️❤️...</div>
    </div>
  );
};

export default Meumeu;
