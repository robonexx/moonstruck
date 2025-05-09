'use client';
import React, { useEffect, useState } from 'react';
import AnimatedCraze from '@/components/AnimationCraze';
import TheDrop from '@/components/AnimationCraze/TheDrop';
import WaterDrop from '@/components/WaterDrop';
import { motion, AnimatePresence } from 'framer-motion';
import Fullmoon from '../AnimationCraze/fullmoon';

const Splash = () => {
  const [showLoadingSection, setShowLoadingSection] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingSection(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEnterClick = () => {
    // in client side not so secret ;D
    if (password === process.env.NEXT_PUBLIC_SUPER_SECRET_PASSWORD) {
      localStorage.setItem('authenticated', 'true');
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className='w-screen max-h-screen overflow-hidden p-40 absolute top-0 left-0'>
      <AnimatePresence mode='wait'>
        {showLoadingSection && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ exit: { delay: 7 } }}
          >
            <Fullmoon />
            <TheDrop />
            <AnimatedCraze />
            <WaterDrop />
          </motion.section>
        )}
      </AnimatePresence>
      {!showLoadingSection && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <motion.input
            type='text'
            value={password}
            onChange={handlePasswordChange}
            className='border px-4 py-2 border-r-2 rounded mb-4'
            style={{ color: 'black' }}
            placeholder='Enter Password'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
          <motion.button
            className='mt-2 md:mr-2 border px-4 py-2 border-r-2 border-zinc-500 bg-white rounded hover:bg-white hover:text-black transition-all duration-300'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            onClick={handleEnterClick}
          >
            Enter
          </motion.button>
          {error && (
            <motion.p
              className='text-red-500 mt-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              {error}
            </motion.p>
          )}
        </div>
      )}
    </div>
  );
};

export default Splash;
