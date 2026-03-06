'use client';
import './particles.css';
import { useState } from 'react';

export default function Particles({ quantity }: { quantity: number }) {
  // Tuve que hacerlo asi por error de usar funcion impura y cambiar el resultado en cada re render.
  // Ademas tuve que desactivar el ssr para esto, debido a que renderizaba los random en server y luego
  // cliente y al comparar chocaba que no eran iguales. Por ultimo no ocupe box-shadow y solo blur con tamano y
  // gradiente, debido a que segun la IA esta mejor optimizado de esta manera.
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
          className="fire-ball absolute w-12.5 aspect-square bottom-0 rounded-full pointer-events-none z-1 blur-md"
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
