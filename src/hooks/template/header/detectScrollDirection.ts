import { useEffect, useState } from 'react';

export default function useDetectScrollDirection(): 'top' | 'bottom' | null {
  const [detectedScrollDirection, setDetectedScrollDirection] = useState<
    'top' | 'bottom'
  >('top');

  useEffect((): (() => void) => {
    let scrollOldValue = 0;
    const handleScroll = (): void => {
      let scrollNewValue = window.pageYOffset;
      if (scrollOldValue - scrollNewValue < 0 && scrollNewValue > 55) {
        setDetectedScrollDirection('bottom');
      } else if (scrollOldValue - scrollNewValue > 0) {
        setDetectedScrollDirection('top');
      }
      scrollOldValue = scrollNewValue;
    };
    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return detectedScrollDirection;
}