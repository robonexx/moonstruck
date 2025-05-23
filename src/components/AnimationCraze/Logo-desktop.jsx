import React from 'react';
import { motion } from 'framer-motion';
import styles from './AnimationCraze.module.scss';

const LogoDesktop = () => {
  return (
    /*  <div className={styles['logo-desktop']}> */
    <motion.svg
      width='211'
      height='51'
      viewBox='0 0 211 51'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={styles['svg-desktop']}
    >
      <motion.path
        d='M210.358 12.9079H196.014V20.6646H209.557V30.8836H196.014V38.8865H210.358V49.1056H183.948V2.68888H210.358V12.9079Z'
        fill='url(#paint0_linear_644_2427)'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.2,
          delay: 3.4,
          ease: 'easeInOut',
          type: 'spring',
          damping: 9,
          stiffness: 50,
          restDelta: 0.005,
        }}
      />
      <motion.path
        d='M173.484 14.5701C172.17 13.503 170.857 12.7232 169.544 12.2308C168.231 11.6972 166.958 11.4305 165.727 11.4305C164.168 11.4305 162.895 11.7998 161.91 12.5386C160.925 13.2773 160.433 14.2417 160.433 15.4319C160.433 16.2527 160.679 16.9299 161.172 17.4634C161.664 17.9969 162.3 18.4689 163.08 18.8793C163.901 19.2487 164.804 19.577 165.789 19.8643C166.815 20.1516 167.82 20.4594 168.805 20.7877C172.745 22.101 175.618 23.8657 177.424 26.0819C179.27 28.257 180.194 31.1094 180.194 34.6388C180.194 37.0192 179.783 39.1738 178.963 41.1027C178.183 43.0316 177.013 44.6937 175.454 46.0891C173.935 47.4434 172.047 48.49 169.79 49.2287C167.574 50.0085 165.05 50.3983 162.218 50.3983C156.349 50.3983 150.912 48.6541 145.905 45.1657L151.076 35.4391C152.881 37.0397 154.667 38.2299 156.431 39.0096C158.196 39.7894 159.94 40.1793 161.664 40.1793C163.634 40.1793 165.091 39.7278 166.035 38.825C167.02 37.9221 167.512 36.8961 167.512 35.7469C167.512 35.0492 167.389 34.4541 167.143 33.9617C166.897 33.4281 166.486 32.9562 165.912 32.5458C165.337 32.0943 164.578 31.6839 163.634 31.3146C162.731 30.9452 161.623 30.5348 160.31 30.0833C158.75 29.5909 157.211 29.0573 155.693 28.4828C154.215 27.8672 152.881 27.0669 151.691 26.0819C150.542 25.0969 149.598 23.8657 148.86 22.3883C148.162 20.8698 147.813 18.9614 147.813 16.6631C147.813 14.3649 148.182 12.2923 148.921 10.4455C149.701 8.55765 150.768 6.95707 152.122 5.64378C153.518 4.28944 155.2 3.24291 157.17 2.50419C159.181 1.76546 161.418 1.39609 163.88 1.39609C166.179 1.39609 168.579 1.72442 171.083 2.38106C173.586 2.99667 175.987 3.92008 178.285 5.15129L173.484 14.5701Z'
        fill='url(#paint1_linear_644_2427)'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: 3.2,
          ease: 'easeInOut',
          type: 'spring',
          damping: 11,
          stiffness: 40,
          restDelta: 0.005,
        }}
      />
      <motion.path
        d='M113.713 2.68888V27.9287C113.713 29.2831 113.754 30.6784 113.836 32.1149C113.959 33.5102 114.267 34.7825 114.759 35.9316C115.293 37.0807 116.114 38.0247 117.222 38.7634C118.33 39.4611 119.889 39.8099 121.9 39.8099C123.911 39.8099 125.45 39.4611 126.517 38.7634C127.625 38.0247 128.446 37.0807 128.98 35.9316C129.513 34.7825 129.821 33.5102 129.903 32.1149C130.026 30.6784 130.088 29.2831 130.088 27.9287V2.68888H142.092V29.5909C142.092 36.814 140.43 42.0877 137.106 45.4119C133.823 48.7362 128.754 50.3984 121.9 50.3984C115.047 50.3984 109.958 48.7362 106.633 45.4119C103.309 42.0877 101.647 36.814 101.647 29.5909V2.68888H113.713Z'
        fill='url(#paint2_linear_644_2427)'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 3,
          ease: 'easeInOut',
          type: 'spring',
          damping: 10,
          stiffness: 35,
          restDelta: 0.005,
        }}
      />
      <motion.path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M48.3781 16.2922C47.1059 19.2471 46.4697 22.4483 46.4697 25.8957C46.4697 29.3431 47.1059 32.5647 48.3781 35.5607C49.6504 38.5156 51.4151 41.1011 53.6723 43.3173C55.9295 45.5335 58.6177 47.2777 61.7368 48.55C64.8969 49.7812 68.3648 50.3968 72.1405 50.3968C75.8752 50.3968 79.3226 49.7812 82.4827 48.55C85.6428 47.2777 88.3515 45.5335 90.6087 43.3173C92.907 41.1011 94.6922 38.5156 95.9645 35.5607C97.2367 32.5647 97.8728 29.3431 97.8728 25.8957C97.8728 22.4483 97.2367 19.2471 95.9645 16.2922C94.6922 13.2963 92.907 10.6902 90.6087 8.474C88.3515 6.25782 85.6428 4.53412 82.4827 3.30291C79.3226 2.03066 75.8752 1.39453 72.1405 1.39453C68.3648 1.39453 64.8969 2.03066 61.7368 3.30291C58.6177 4.53412 55.9295 6.25782 53.6723 8.474C51.4151 10.6902 49.6504 13.2963 48.3781 16.2922ZM72.5266 13.8767C72.8785 14.3025 73.2533 14.7561 73.6415 15.2375L73.6758 15.2788C76.9259 19.1974 81.3769 24.5639 81.3769 28.7647C81.3769 31.4061 80.3267 33.8341 78.6618 35.5683C76.9969 37.3293 74.6917 38.3965 72.1303 38.3965C69.569 38.3965 67.2637 37.3026 65.5988 35.5683C63.9083 33.8341 62.8838 31.4328 62.8838 28.7647C62.8838 24.5491 67.3662 19.1329 70.6191 15.2375C71.157 14.5971 71.6693 13.9835 72.1303 13.3965C72.2586 13.5524 72.3909 13.7125 72.5266 13.8767Z'
        fill='url(#paint3_linear_644_2427)'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 3,
          ease: 'easeInOut',
          type: 'spring',
          damping: 10,
          stiffness: 50,
          restDelta: 0.005,
        }}
      />
      <motion.path
        d='M13.1958 20.603H30.6174V2.68888H42.6833V49.1056H30.6174V29.9602H13.1958V49.1056H1.12988V2.68888H13.1958V20.603Z'
        fill='url(#paint4_linear_644_2427)'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 2.8,
          ease: 'easeInOut',
          type: 'spring',
          damping: 10,
          stiffness: 50,
          restDelta: 0.005,
        }}
      />
      <defs>
        <linearGradient
          id='paint0_linear_644_2427'
          x1='1.12988'
          y1='25.8964'
          x2='210.358'
          y2='25.8964'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#d3d5dd' />
          <stop offset='0.49' stopColor='#c1c3c2' />
          <stop offset='1' stopColor='#ababab' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_644_2427'
          x1='1.12988'
          y1='25.8964'
          x2='210.358'
          y2='25.8964'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#f6f7f9' />
          <stop offset='0.49' stopColor='#bfc1c0' />
          <stop offset='1' stopColor='#9d9e9f' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_644_2427'
          x1='1.12988'
          y1='25.8964'
          x2='210.358'
          y2='25.8964'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#eeeff3' />
          <stop offset='0.49' stopColor='#cacdcc' />
          <stop offset='1' stopColor='#7d7d7e' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_644_2427'
          x1='1.12988'
          y1='25.8964'
          x2='210.358'
          y2='25.8964'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#d4d5d9' />
          <stop offset='0.49' stopColor='#e0e4e2' />
          <stop offset='1' stopColor='#9c9d9f' />
        </linearGradient>
        <linearGradient
          id='paint4_linear_644_2427'
          x1='1.12988'
          y1='25.8964'
          x2='210.358'
          y2='25.8964'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#a0a1a4' />
          <stop offset='0.49' stopColor='#e9f0ed' />
          <stop offset='1' stopColor='#fcfcfd' />
        </linearGradient>
      </defs>
    </motion.svg>
    /*  </div> */
  );
};

export default LogoDesktop;
