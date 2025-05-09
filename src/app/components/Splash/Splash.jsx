'use client';
import React, { useEffect, useState } from 'react';
import AnimatedCraze from '@/components/AnimationCraze';
import TheDrop from '@/components/AnimationCraze/TheDrop';
import WaterDrop from '@/components/WaterDrop';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className='w-full h-screen overflow-hidden p-40'>
      <AnimatePresence mode='wait'>
        {showLoadingSection && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ exit: { delay: 6 } }}
          >
            <TheDrop />
            <AnimatedCraze />
            <WaterDrop />
          </motion.section>
        )}
      </AnimatePresence>
      {!showLoadingSection && (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <motion.input
            type='password'
            value={password}
            onChange={handlePasswordChange}
            className='border px-4 py-2 border-r-2 rounded mb-4'
            placeholder='Enter Password'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
          <motion.button
            className='border px-4 py-2 border-r-2 rounded hover:bg-white hover:text-black transition-all duration-300'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            onClick={handleEnterClick}
          >
            <h2>Enter</h2>
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
