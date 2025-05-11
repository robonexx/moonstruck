// moon.js
export const getMoonPhase = (yy, mm, dd) => {
  if (mm < 3) {
    yy--;
    mm += 12;
  }
  mm++;
  const c = 365.25 * yy;
  const e = 30.6 * mm;
  let jd = c + e + dd - 694039.09;
  jd /= 29.5305882;
  let b = parseInt(jd);
  jd -= b;
  b = Math.round(jd * 8);
  if (b >= 8) b = 0;

  const phases = [
    {
      src: 'https://raw.githubusercontent.com/tallulahh/moon-phase/main/newmoon.png',
      phase: 'New Moon',
    },
    {
      src: 'https://raw.githubusercontent.com/tallulahh/moon-phase/main/waxingcrescent.png',
      phase: 'Waxing Crescent',
    },
    {
      src: 'https://raw.githubusercontent.com/tallulahh/moon-phase/main/firstquarter.png',
      phase: 'First Quarter',
    },
    {
      src: 'https://raw.githubusercontent.com/tallulahh/moon-phase/main/waxinggibbous.png',
      phase: 'Waxing Gibbous',
    },
    {
      src: 'https://raw.githubusercontent.com/tallulahh/moon-phase/main/fullmoon.png',
      phase: 'Full Moon',
    },
    {
      src: 'https://raw.githubusercontent.com/tallulahh/moon-phase/main/waninggibbous.png',
      phase: 'Waning Gibbous',
    },
    {
      src: 'https://raw.githubusercontent.com/tallulahh/moon-phase/main/lastquarter.png',
      phase: 'Last Quarter',
    },
    {
      src: 'https://raw.githubusercontent.com/tallulahh/moon-phase/main/waningcrescent.png',
      phase: 'Waning Crescent',
    },
  ];

  return phases[b];
};


export const swedenFullMoons2025 = [
  '2025-01-14',
  '2025-02-12',
  '2025-03-14',
  '2025-04-13',
  '2025-05-12',
  '2025-06-11',
  '2025-07-10',
  '2025-08-09',
  '2025-09-07',
  '2025-10-07',
  '2025-11-05',
  '2025-12-05'
];