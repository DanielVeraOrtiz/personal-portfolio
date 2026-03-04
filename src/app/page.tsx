'use client';
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('@/components/heroSection/hero'), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
