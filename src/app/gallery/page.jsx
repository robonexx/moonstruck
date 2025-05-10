'use client';
import Hero from '@/components/Hero';
import './gallery.scss';
import ImageGallery from '@/components/ImageGallery';

const Gallery = () => {
  return (
    <main className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen'>
      <div className='flex flex-col row-start-2 items-center sm:items-start'>
        <Hero />
        <div id='photos'>
          <ImageGallery />
        </div>
      </div>
    </main>
  );
};

export default Gallery;
