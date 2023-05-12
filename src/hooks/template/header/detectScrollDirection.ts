import { useEffect, useState } from 'react';

export default function useDetectScrollDirection(): 'top' | 'bottom' | null {
  const [detectedScrollDirection, setDetectedScrollDirection] = useState<
    'top' | 'bottom' | null
  >(null);
  useEffect((): void => {
    let scrollOldValue = 0;
    window.addEventListener('scroll', (): void => {
      let scrollNewValue = window.pageYOffset;
      if (scrollOldValue - scrollNewValue < 0) {
        setDetectedScrollDirection('bottom');
      } else if (scrollOldValue - scrollNewValue > 0) {
        setDetectedScrollDirection('top');
      }
      scrollOldValue = scrollNewValue;
    });
  }, []);
  return detectedScrollDirection;
}
