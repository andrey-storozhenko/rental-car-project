'use client';

import { useRouter } from 'next/navigation';
import css from "./page.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <div className={css.hero}>
      <div className={css.heroContent}>
        <h1 className={css.heroTitle}>Find your perfect rental car</h1>
        <h2 className={css.heroText}>Reliable and budget-friendly rentals for any journey</h2>
        <button className={css.heroButton} onClick={() => router.push('/catalog')}>View Catalog</button>
      </div>
    </div>
  );
}
