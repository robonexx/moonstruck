
import React, { useContext } from 'react';
import styles from './Button.module.scss';
import { CursorContext } from '@/components/Cursor/CursorProvider';


const Button = ({
  children,
  size = 'medium',
  background = '#ffffff',
  color = '#000000',
  borderRadius = '5px',
  theme = 'filled',
  onClick,
}) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick && onClick(event);
    }
  };

  const handleFocus = (event) => {
    (event.target).style.backgroundColor = styles.lighten;
  };

  const handleBlur = (event) => {
    (event.target).style.backgroundColor = background;
  };

  const { setSize } = useContext(CursorContext);

  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[theme]} max-w-[200px] hover:brightness-110`}
      style={{
        backgroundColor: background,
        color: color,
        borderRadius: borderRadius,
      }}
      onClick={onClick}
      onKeyDown={handleKeyPress}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}

     /*  onMouseEnter={() => {
        setSize('regular');
      }}
      onMouseLeave={() => setSize('small')} */
    >
      {children}
    </button>
  );
};

export default Button;
