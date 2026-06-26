import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Position = 'bottom-left' | 'bottom-right' | 'left-center' | 'right-center' | 'top-center';

const POSITIONS: Position[] = ['bottom-left', 'bottom-right', 'left-center', 'right-center', 'top-center'];

const SAYINGS = [
  "Rendering: 99%... for the last 3 hours.",
  "I can fix it in post. Wait, I'm a dog.",
  "Ah yes, 'Final_v7_ActuallyFinal_USE_THIS.mp4'",
  "Barking at unlinked media files.",
  "Just clear the cache, it fixes everything.",
  "I think the client wants it to 'pop' more.",
  "You forgot to hit Cmd+S, didn't you?",
  "Auto-save is a dog's best friend.",
  "I can't read, but this color grading looks ruff.",
  "I chew on bones and bad keyframes.",
  "Still waiting for Media Encoder...",
  "Drop frames? Not on my watch.",
  "I'm auditing your timeline for squirrel-related content.",
];

// Pure SVG Dog component instead of an image
const DogSVG = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left Ear */}
    <path d="M 20 50 L 10 15 L 40 30 Z" fill="#c48a47" stroke="#2c1e16" strokeWidth="4" strokeLinejoin="round" />
    <path d="M 23 45 L 15 22 L 35 32 Z" fill="#e8c396" />
    
    {/* Right Ear */}
    <path d="M 80 50 L 90 15 L 60 30 Z" fill="#c48a47" stroke="#2c1e16" strokeWidth="4" strokeLinejoin="round" />
    <path d="M 77 45 L 85 22 L 65 32 Z" fill="#e8c396" />
    
    {/* Head/Face */}
    <rect x="20" y="30" width="60" height="55" rx="30" fill="#e2b070" stroke="#2c1e16" strokeWidth="4" />
    
    {/* Muzzle */}
    <ellipse cx="50" cy="65" rx="22" ry="18" fill="#ffffff" stroke="#2c1e16" strokeWidth="3" />
    
    {/* Nose */}
    <ellipse cx="50" cy="58" rx="6" ry="4" fill="#2c1e16" />
    
    {/* Mouth */}
    <path d="M 44 64 Q 50 72 56 64" fill="none" stroke="#2c1e16" strokeWidth="3" strokeLinecap="round" />
    
    {/* Tongue */}
    <path d="M 47 67 Q 50 75 53 67 Z" fill="#ff7b89" stroke="#2c1e16" strokeWidth="2" />
    
    {/* Eyes */}
    <circle cx="35" cy="48" r="4" fill="#2c1e16" />
    <circle cx="65" cy="48" r="4" fill="#2c1e16" />
    
    {/* Eye Sparkles */}
    <circle cx="33" cy="46" r="1.5" fill="#ffffff" />
    <circle cx="63" cy="46" r="1.5" fill="#ffffff" />
    
    {/* Cheeks */}
    <ellipse cx="26" cy="54" rx="4" ry="2" fill="#ff9fae" opacity="0.6" />
    <ellipse cx="74" cy="54" rx="4" ry="2" fill="#ff9fae" opacity="0.6" />
    
    {/* Paws (peeking over edge) */}
    <circle cx="30" cy="90" r="10" fill="#ffffff" stroke="#2c1e16" strokeWidth="3" />
    <line x1="26" y1="95" x2="26" y2="85" stroke="#2c1e16" strokeWidth="2" strokeLinecap="round" />
    <line x1="34" y1="95" x2="34" y2="85" stroke="#2c1e16" strokeWidth="2" strokeLinecap="round" />
    
    <circle cx="70" cy="90" r="10" fill="#ffffff" stroke="#2c1e16" strokeWidth="3" />
    <line x1="66" y1="95" x2="66" y2="85" stroke="#2c1e16" strokeWidth="2" strokeLinecap="round" />
    <line x1="74" y1="95" x2="74" y2="85" stroke="#2c1e16" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export function SneakyDog() {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<Position>('bottom-left');
  const [phrase, setPhrase] = useState("");

  const [isPetting, setIsPetting] = useState(false);

  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scheduleNextAppearance = () => {
    // Random time between 5 and 15 seconds
    const nextTime = Math.random() * 10000 + 5000;
    
    showTimeoutRef.current = setTimeout(() => {
      const randomPos = POSITIONS[Math.floor(Math.random() * POSITIONS.length)];
      setPosition(randomPos);
      setPhrase(SAYINGS[Math.floor(Math.random() * SAYINGS.length)]);
      setIsVisible(true);
      setIsPetting(false);

      // Hide after it peeks for 4 seconds
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        scheduleNextAppearance();
      }, 4000);
    }, nextTime);
  };

  useEffect(() => {
    scheduleNextAppearance();

    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  const handlePet = () => {
    if (isPetting) return;
    setIsPetting(true);
    setPhrase("Woof! *happy editing noises*");
    
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      scheduleNextAppearance();
    }, 2000);
  };

  const getAnimationProps = () => {
    switch (position) {
      case 'bottom-left':
        return {
          initial: { y: '100%', x: 0, rotate: 0 },
          animate: { y: '10%', x: 0, rotate: 0 },
          exit: { y: '100%', x: 0, rotate: 0 },
          className: 'bottom-0 left-[15%]',
          bubbleClass: '-top-20 left-10 md:left-20',
          bubbleTail: 'bottom-[-6px] left-8',
        };
      case 'bottom-right':
        return {
          initial: { y: '100%', x: 0, rotate: 0 },
          animate: { y: '10%', x: 0, rotate: 0 },
          exit: { y: '100%', x: 0, rotate: 0 },
          className: 'bottom-0 right-[15%]',
          bubbleClass: '-top-20 right-10 md:right-20',
          bubbleTail: 'bottom-[-6px] right-8',
        };
      case 'left-center':
        return {
          initial: { x: '-100%', y: '-50%', rotate: 90 },
          animate: { x: '-10%', y: '-50%', rotate: 90 },
          exit: { x: '-100%', y: '-50%', rotate: 90 },
          className: 'top-[50%] left-0',
          bubbleClass: '-top-20 left-16 md:left-24 -rotate-90',
          bubbleTail: 'bottom-[-6px] left-10',
        };
      case 'right-center':
        return {
          initial: { x: '100%', y: '-50%', rotate: -90 },
          animate: { x: '10%', y: '-50%', rotate: -90 },
          exit: { x: '100%', y: '-50%', rotate: -90 },
          className: 'top-[50%] right-0',
          bubbleClass: '-top-20 right-16 md:right-24 rotate-90',
          bubbleTail: 'bottom-[-6px] right-10',
        };
      case 'top-center':
        return {
          initial: { y: '-100%', x: '-50%', rotate: 180 },
          animate: { y: '-10%', x: '-50%', rotate: 180 },
          exit: { y: '-100%', x: '-50%', rotate: 180 },
          className: 'top-0 left-[50%]',
          bubbleClass: '-bottom-24 left-1/2 -translate-x-1/2 rotate-180',
          bubbleTail: 'top-[-6px] left-1/2 -translate-x-1/2',
        };
    }
  };

  const animProps = getAnimationProps();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={animProps.initial}
          animate={animProps.animate}
          exit={animProps.exit}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className={`fixed z-[100] pointer-events-none ${animProps.className}`}
        >
          <div className="relative pointer-events-auto cursor-pointer" onClick={handlePet}>
            <motion.div
              animate={isPetting ? { rotate: [0, -15, 15, -10, 10, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <DogSVG className="w-24 h-24 md:w-32 md:h-32 drop-shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-transform hover:scale-105" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className={`absolute min-w-[140px] max-w-[200px] bg-white text-black p-3 rounded-2xl shadow-xl font-bold text-center text-sm z-50 ${animProps.bubbleClass}`}
            >
              <div className="relative">
                {phrase}
                {/* Bubble tail positioned dynamically */}
                <div className={`absolute w-3 h-3 bg-white rotate-45 ${animProps.bubbleTail}`} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
