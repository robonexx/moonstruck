import SunCalc from 'suncalc';

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

export const getMoonPhase = (date = new Date()) => {
  const { phase } = SunCalc.getMoonIllumination(date);

  const phaseIndex = (() => {
    if (phase < 0.03 || phase > 0.97) return 0; // New Moon
    if (phase < 0.22) return 1; // Waxing Crescent
    if (phase < 0.28) return 2; // First Quarter
    if (phase < 0.47) return 3; // Waxing Gibbous
    if (phase < 0.53) return 4; // Full Moon
    if (phase < 0.72) return 5; // Waning Gibbous
    if (phase < 0.78) return 7; // Waning Crescent
    return 6; // Last Quarter
  })();

  return phases[phaseIndex];
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
  '2025-12-05',
];
