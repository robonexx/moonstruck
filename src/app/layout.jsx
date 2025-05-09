'use client';
import { useState, useEffect } from 'react';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.scss';
import Splash from '../components/Splash/Splash';
import Header from '../components/Navigation/Header';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated === 'true') {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen w-screen overflow-hidden`}
      >
        {!authenticated ? (
          <Splash />
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
