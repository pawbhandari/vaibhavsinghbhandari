import { useEffect, useState } from 'react';

const ADOBE_CURSORS = [
  { name: 'Premiere Pro', path: '/premiere-cursor.svg' },
  { name: 'After Effects', path: '/aftereffects-cursor.svg' },
  { name: 'Photoshop', path: '/photoshop-cursor.svg' },
  { name: 'Illustrator', path: '/illustrator-cursor.svg' },
  { name: 'Lightroom', path: '/lightroom-cursor.svg' },
  { name: 'InDesign', path: '/indesign-cursor.svg' },
  { name: 'Audition', path: '/audition-cursor.svg' },
  { name: 'Animate', path: '/animate-cursor.svg' },
  { name: 'XD', path: '/xd-cursor.svg' },
  { name: 'Acrobat', path: '/acrobat-cursor.svg' },
  { name: 'Bridge', path: '/bridge-cursor.svg' },
  { name: 'Media Encoder', path: '/mediaencoder-cursor.svg' },
  { name: 'Dimension', path: '/dimension-cursor.svg' },
  { name: 'Fresco', path: '/fresco-cursor.svg' },
  { name: 'Dreamweaver', path: '/dreamweaver-cursor.svg' },
  { name: 'Character Animator', path: '/characteranimator-cursor.svg' },
  { name: 'Premiere Rush', path: '/rush-cursor.svg' },
  { name: 'Substance 3D', path: '/substance-cursor.svg' },
  { name: 'Express', path: '/spark-cursor.svg' },
];

export function useAdobeCursor() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCursor, setCurrentCursor] = useState(ADOBE_CURSORS[0]);

  useEffect(() => {
    // Random interval between 5-10 seconds
    const getRandomInterval = () => Math.floor(Math.random() * 5000) + 5000;

    const cycleCursor = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % ADOBE_CURSORS.length;
        setCurrentCursor(ADOBE_CURSORS[nextIndex]);
        return nextIndex;
      });
    };

    let timeoutId: NodeJS.Timeout;

    const scheduleNext = () => {
      timeoutId = setTimeout(() => {
        cycleCursor();
        scheduleNext();
      }, getRandomInterval());
    };

    scheduleNext();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    // Apply cursor to document - hotspot at 0,0 for pointer tip
    const cursorStyle = `url('${currentCursor.path}') 0 0, auto`;
    document.documentElement.style.cursor = cursorStyle;
    document.body.style.cursor = cursorStyle;

    // Apply to all elements using a style tag
    const styleId = 'adobe-cursor-style';
    let styleEl = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }

    styleEl.textContent = `
      *, *::before, *::after {
        cursor: url('${currentCursor.path}') 0 0, auto !important;
      }
    `;

    return () => {
      // Cleanup handled by next effect run
    };
  }, [currentCursor]);

  return { currentCursor, currentIndex, totalCursors: ADOBE_CURSORS.length };
}

export { ADOBE_CURSORS };
