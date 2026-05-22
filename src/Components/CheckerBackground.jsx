/**
 * CheckerBackground.jsx
 *
 * Drop this component at the TOP of your HomePage return, before everything else.
 * It injects:
 *   1. A translucent animated checkbox/grid canvas that adapts to light/dark theme
 *   2. A custom cursor that follows the mouse
 *   3. A hover "pop-out" effect — the grid cell under the cursor lifts up with a glow
 *
 * USAGE in HomePage.jsx:
 *   import CheckerBackground from './CheckerBackground';
 *   // Inside your return:
 *   return (
 *     <>
 *       <CheckerBackground />
 *       <section className="hero-container"> ... </section>
 *       ...
 *     </>
 *   );
 *
 * Also import the CSS:
 *   import './CheckerBackground.css';
 */

import { useEffect, useRef } from 'react';

const CELL_SIZE = 40;         // px — size of each checker square
const GLOW_RADIUS = 3;        // cells — how many cells around cursor get affected
const MAX_LIFT = 18;          // px — max 3D lift height at epicenter

export default function CheckerBackground() {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    const ctx = canvas.getContext('2d');

    /* ── resize canvas to fill viewport ── */
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    /* ── track mouse ── */
    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top  = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', onMove);

    /* ── cursor grow on interactive elements ── */
    const onEnter = () => cursor?.classList.add('hovered');
    const onLeave = () => cursor?.classList.remove('hovered');
    const interactables = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    /* ── detect light vs dark mode ── */
    const isDark = () =>
      document.documentElement.classList.contains('dark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches ||
      document.body.style.background?.includes('1') ||  // rough heuristic
      getComputedStyle(document.documentElement)
        .getPropertyValue('--bg')?.trim().startsWith('#0') ||
      getComputedStyle(document.documentElement)
        .getPropertyValue('--bg')?.trim().startsWith('#1') ||
      getComputedStyle(document.documentElement)
        .getPropertyValue('--bg')?.trim().startsWith('#2');

    /* ── main draw loop ── */
    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // cols / rows with 0.5 extra so grid always bleeds past edge
      const cols = Math.ceil(W / CELL_SIZE) + 1;
      const rows = Math.ceil(H / CELL_SIZE) + 1;

      ctx.clearRect(0, 0, W, H);

      const dark = isDark();

      // theme-aware colors
      const lineColor   = dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
      const fillEven    = dark ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.018)';
      const fillOdd     = 'rgba(0,0,0,0)'; // transparent
      const glowOrange  = dark ? 'rgba(249,115,22,'  : 'rgba(234,88,12,';
      const glowTeal    = dark ? 'rgba(20,184,166,'  : 'rgba(13,148,136,';

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * CELL_SIZE;
          const y = row * CELL_SIZE;

          // distance from mouse in cell units
          const cx = x + CELL_SIZE / 2;
          const cy = y + CELL_SIZE / 2;
          const dx = (cx - mx) / CELL_SIZE;
          const dy = (cy - my) / CELL_SIZE;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // normalised influence [0..1], sharper falloff
          const influence = Math.max(0, 1 - dist / GLOW_RADIUS);
          const ease = influence * influence * (3 - 2 * influence); // smoothstep

          /* ---- 3-D lift: translate cell upward ---- */
          const lift = ease * MAX_LIFT;

          ctx.save();

          // translate to cell center, lift, draw, restore
          ctx.translate(cx, cy - lift);

          // checkerboard fill
          const isEven = (row + col) % 2 === 0;
          ctx.fillStyle = isEven ? fillEven : fillOdd;
          ctx.fillRect(-CELL_SIZE / 2, -CELL_SIZE / 2, CELL_SIZE, CELL_SIZE);

          // hover glow — alternates orange / teal by cell parity
          if (ease > 0.01) {
            const glowBase  = isEven ? glowOrange : glowTeal;
            const alpha     = ease * (dark ? 0.22 : 0.14);
            ctx.fillStyle   = glowBase + alpha + ')';
            ctx.fillRect(-CELL_SIZE / 2, -CELL_SIZE / 2, CELL_SIZE, CELL_SIZE);

            // subtle border highlight on lifted cells
            ctx.strokeStyle = glowBase + (ease * 0.5) + ')';
            ctx.lineWidth   = ease * 1.2;
            ctx.strokeRect(
              -CELL_SIZE / 2 + 0.5,
              -CELL_SIZE / 2 + 0.5,
              CELL_SIZE - 1,
              CELL_SIZE - 1
            );
          }

          // grid lines
          ctx.strokeStyle = lineColor;
          ctx.lineWidth   = 0.6;
          ctx.strokeRect(-CELL_SIZE / 2, -CELL_SIZE / 2, CELL_SIZE, CELL_SIZE);

          ctx.restore();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Checkbox grid canvas — fixed behind all content */}
      <canvas
        ref={canvasRef}
        id="checker-canvas"
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Custom cursor */}
      <div
        ref={cursorRef}
        id="custom-cursor"
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: 20,
          height: 20,
          border: '2px solid var(--orange, #f97316)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease, border-color 0.2s ease',
          mixBlendMode: 'difference',
          left: '-100px',
          top: '-100px',
        }}
      />

      {/* Hide native cursor */}
      <style>{`body { cursor: none !important; }`}</style>
    </>
  );
}
