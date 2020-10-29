import React, { useEffect } from 'react';
import paper from 'paper';

const CustomCursor = () => {
  useEffect(() => {
    let clientX = -100;
    let clientY = -100;
    const innerCursor = document.querySelector('.cursor-dot');

    let lastX = 0;
    let lastY = 0;
    let isHover = false;
    let group;

    const initCursor = () => {
      // add listener to track the current mouse position
      document.addEventListener('mousemove', e => {
        clientX = e.clientX;
        clientY = e.clientY;
      });

      // transform the innerCursor to the current mouse position
      // use requestAnimationFrame() for smooth performance
      const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;

        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    };

    const initCanvas = () => {
      const canvas = document.querySelector('.cursor-canvas');
      const shapeBounds = {
        width: 55,
        height: 55
      };
      paper.setup(canvas);
      const strokeColor = 'rgba(211, 12, 184, 0.5)';
      const strokeWidth = 1.5;
      const segments = 8;
      const radius = 15;

      // the base shape for the noisy circle
      const polygon = new paper.Path.RegularPolygon(
        new paper.Point(0, 0),
        segments,
        radius
      );
      polygon.strokeColor = strokeColor;
      polygon.strokeWidth = strokeWidth;
      polygon.smooth();
      group = new paper.Group([polygon]);
      group.applyMatrix = false;

      let bigCoordinates = [];

      // function for linear interpolation of values
      const lerp = (a, b, n) => {
        return (1 - n) * a + n * b;
      };

      // the draw loop of Paper.js
      // (60fps with requestAnimationFrame under the hood)
      paper.view.onFrame = event => {
        lastX = lerp(lastX, clientX, 0.2);
        lastY = lerp(lastY, clientY, 0.2);
        group.position = new paper.Point(lastX, lastY);

        if (isHover && polygon.bounds.width < shapeBounds.width) {
          polygon.scale(1.04);
        } else if (!isHover && polygon.bounds.width > 30) {
          polygon.scale(0.92);
        }

        // while stuck and big, apply simplex noise
        if (isHover && polygon.bounds.width >= shapeBounds.width) {
          // first get coordinates of large circle
          if (bigCoordinates.length === 0) {
            polygon.segments.forEach((segment, i) => {
              bigCoordinates[i] = [segment.point.x, segment.point.y];
            });
          }
        }
        polygon.smooth();
      };
    };

    const initHovers = () => {
      // find the center of the link element and set stuckX and stuckY
      // these are needed to set the position of the noisy circle
      const handleMouseEnter = e => {
        isHover = true;
      };

      // reset isStuck on mouseLeave
      const handleMouseLeave = () => {
        isHover = false;
      };

      // add event listeners to all items
      const linkItems = document.querySelectorAll('a');
      linkItems.forEach(item => {
        item.addEventListener('mouseenter', handleMouseEnter);
        item.addEventListener('mouseleave', handleMouseLeave);
        item.addEventListener('mousedown', handleMouseLeave);
        item.addEventListener('mouseup', handleMouseEnter);
      });
    };
    initCursor();
    initCanvas();
    initHovers();
  }, []);

  return (
    <div>
      <div class='cursor cursor-dot'></div>
      <canvas class='cursor cursor-canvas' resize></canvas>
    </div>
  );
};

export default CustomCursor;
