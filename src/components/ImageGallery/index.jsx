'use client';
import React, { useState, Suspense } from 'react';
import {
  RiCloseFill,
  RiArrowRightCircleLine,
  RiArrowLeftCircleLine,
} from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './ImageGallery.module.scss';

const images = [
  '/image21.webp',
  '/image10.webp',
  '/image2.webp',
  '/image3.webp',
  '/image19.webp',
  '/image20.webp',
  '/image4.webp',
  '/image5.webp',
  '/image7.webp',
  '/image8.webp',
  '/image9.webp',
  '/image13.webp',
  '/image1.webp',
  '/image11.webp',
  '/image12.webp',
  '/image.webp',
];

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.galleryWrapper}>
      <h2 className={styles.title}>Gallery</h2>
      <p>
        I keep our memories close, like folded letters in my chest... quiet,
        warm, close to my heart.
      </p>

      {/* Masonry List */}
      <div className={styles.masonryList}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.masonryItem}
            onClick={() => openLightbox(index)}
          >
            {/* Next Image usage:
              Use width/height so aspect ratio is preserved */}
            <Image
              src={image}
              alt={`Gallery ${index}`}
              width={400}
              height={600} // or any approximate ratio
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            // Outer overlay
            className={styles.lightbox}
            onClick={closeLightbox} // Clicking overlay => close
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Blurred background image */}
            <motion.div
              className={styles.lightboxBackground}
              style={{
                backgroundImage: `url(${images[selectedIndex]})`,
              }}
            />

            {/* 
              Inner wrapper for the actual image + buttons. 
              onClick={e => e.stopPropagation()} ensures
              that clicking inside won't close the overlay.
            */}
            <motion.div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              {/* Close Button */}
              <button className={styles.closeButton} onClick={closeLightbox}>
                <RiCloseFill />
              </button>

              {/* Prev Button */}
              <button className={styles.prevButton} onClick={showPrev}>
                <RiArrowLeftCircleLine />
              </button>

              {/* Next Button */}
              <button className={styles.nextButton} onClick={showNext}>
                <RiArrowRightCircleLine />
              </button>

              {/* Main Image in the lightbox */}
              <Suspense fallback={<div>Loading...</div>}>
                <Image
                  src={images[selectedIndex]}
                  alt={`Gallery ${selectedIndex}`}
                  width={1000}
                  height={800}
                  className={styles.lightboxImage}
                />
              </Suspense>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
