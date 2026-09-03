const MOTES = [
  { left: 8, top: 12, size: 5, delay: 0, dur: 12 },
  { left: 18, top: 46, size: 3, delay: 2.4, dur: 10 },
  { left: 27, top: 71, size: 4, delay: 1.1, dur: 13 },
  { left: 35, top: 22, size: 3, delay: 3.6, dur: 11 },
  { left: 42, top: 88, size: 5, delay: 0.8, dur: 14 },
  { left: 48, top: 6, size: 4, delay: 5.2, dur: 12 },
  { left: 54, top: 37, size: 3, delay: 2.9, dur: 9 },
  { left: 60, top: 63, size: 6, delay: 1.7, dur: 15 },
  { left: 66, top: 15, size: 3, delay: 4.3, dur: 11 },
  { left: 72, top: 80, size: 4, delay: 0.4, dur: 12 },
  { left: 78, top: 30, size: 5, delay: 3.1, dur: 13 },
  { left: 84, top: 57, size: 3, delay: 1.9, dur: 10 },
  { left: 90, top: 9, size: 4, delay: 4.9, dur: 14 },
  { left: 94, top: 74, size: 5, delay: 2.2, dur: 12 },
  { left: 12, top: 92, size: 4, delay: 5.8, dur: 11 },
  { left: 31, top: 54, size: 2, delay: 3.4, dur: 9 },
  { left: 57, top: 95, size: 3, delay: 0.9, dur: 13 },
  { left: 69, top: 44, size: 2, delay: 4.6, dur: 10 },
  { left: 86, top: 88, size: 3, delay: 1.4, dur: 12 },
  { left: 22, top: 28, size: 2, delay: 6.1, dur: 11 },
];

export function Motes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {MOTES.map((m, i) => (
        <span
          key={i}
          className="mote"
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            width: `${m.size * 2}px`,
            height: `${m.size * 2}px`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
