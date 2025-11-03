import React, { useState } from 'react';

export default function useShowOnScrollUp(threshold = 8) {
  const [show, setShow] = useState(true);
  const [lastY, setLastY] = useState(0);

  // hindari jitter saat dekat top
  const nearTop = (y: number) => y < 4;

  React.useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY || 0;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (nearTop(y)) {
            setShow(true);
          } else {
            if (y > lastY + threshold)
              setShow(false); // scroll down → hide
            else if (y < lastY - threshold) setShow(true); // scroll up → show
          }
          setLastY(y);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY, threshold]);

  return show;
}
