'use client';
import { useState, useEffect } from 'react';
import Splash from '../components/Splash/Splash';
import Header from '../components/Navigation/Header';
import Footer from '../components/Footer';
import { Fira_Sans, Playfair_Display } from 'next/font/google';
import './globals.scss';

const fira = Fira_Sans({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-fira-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
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
      <body className={` ${fira.variable} ${playfair.variable} antialiased`}>
        {!authenticated ? (
          <Splash />
        ) : (
          <>
            <Header />
            {children}
            {/*   <Footer /> */}
          </>
        )}
      </body>
    </html>
  );
}
