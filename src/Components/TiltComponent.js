import React, { useRef, useEffect } from 'react';
import { useState } from 'react';

function TiltComponent(Comp) {
  const defaultMQuery = window.innerWidth / 16 > 62.5;
  const [mQuery, setMQuery] = useState(defaultMQuery);
  const Tilt = (props) => {
    const ref = useRef(null);
    const handleMove = (e) => {
      const xVal = e.layerX;
      const yVal = e.layerY;
      const height = ref.current.clientHeight;
      const width = ref.current.clientWidth;
      const xRotation = 20 * ((yVal - height / 2) / height);
      const yRotation = -20 * ((xVal - width / 2) / width);

      const transString = `perspective(800px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      ref.current.style.transform = transString;
    };

    useEffect(() => {
      const mediaQuery = window.matchMedia('(min-width: 62.5rem)');
      mediaQuery.addEventListener('change', (ev) => {
        setMQuery(ev.matches);
      });
      const el = ref.current;
      ref.current.classList.add('boxShadow');
      /* Get the height and width of the element */
      if (mQuery) {
        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseout', () => {
          el.style.transform =
            'perspective(500px) scale(1) rotateX(0) rotateY(0)';
        });
        el.addEventListener('mousedown', () => {
          el.style.transform =
            'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
        });
        el.addEventListener('mouseup', () => {
          el.style.transform =
            'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
        });
      }
      return () => {
        mediaQuery.removeEventListener('change', setMQuery);
      };
    }, []);
    return <Comp {...props} forwardedRef={ref} />;
  };
  return Tilt;
}

export default TiltComponent;
