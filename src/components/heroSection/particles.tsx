'use client';
import './particles.css';
import { useState } from 'react';

export default function Particles({ quantity }: { quantity: number }) {
  const [particles] = useState(() =>
    [...Array(quantity)].map(() => ({
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 8 + 6,
    })),
  );

  return (
    <>
      {particles.map((particle, i) => (
        <div
          key={`particle-${i}`}
          className="fire-ball"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        ></div>
      ))}
    </>
  );
}
