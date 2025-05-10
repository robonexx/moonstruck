'use client';
import React from 'react';
import './meumeu.scss';
import Body1 from '@/components/Body1';
import Body2 from '@/components/Body2';

const Meumeu = () => {
  return (
    <div className='meumeu'>
      <section>
        <Body2 />
      </section>
      <section>
        <Body1 />
      </section>
    </div>
  );
};

export default Meumeu;
