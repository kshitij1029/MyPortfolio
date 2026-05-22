import React, { useState, useEffect } from 'react';

// --- ANIMATION HELPER (Keep this in the same file) ---
const AnimatedStat = ({ target, duration = 1500 }) => {
  const numericValue = parseFloat(target);
  const suffix = target.replace(/[0-9.]/g, '');
  const isDecimal = target.includes('.');

  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = progress * numericValue;
      
      setCount(isDecimal ? currentValue.toFixed(2) : Math.floor(currentValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [numericValue, duration, isDecimal]);

  return <>{count}{suffix}</>;
};

export default AnimatedStat;