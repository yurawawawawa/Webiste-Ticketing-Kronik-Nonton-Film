"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/knf.module.css";

export function SuccessPage() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const interval = window.setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000);
    const timeout = window.setTimeout(() => router.push("/"), 10000);
    return () => { window.clearInterval(interval); window.clearTimeout(timeout); };
  }, [router]);

  return (
    <main className={styles.successPage}>
      <header className={styles.successHeader}><div>KNF 2026</div><b>BOOKING CONFIRMED</b></header>
      <section className={styles.successContent}>
        <div className={styles.successMessage}>
          <span className={styles.check}>✓</span><p className={styles.eyebrow}>YOU&apos;RE ALL SET</p><h1>Selamat<br />Bersinema!</h1>
          <Link href="/">Return to Festival Programs</Link>
        </div>
        <article className={styles.ticket}>
          <header><b>KNF 2026 / ADMIT</b><b>CONFIRMED</b></header>
          <div className={styles.ticketBody}>
            <p>PROGRAM</p><h2>Nama Program</h2>
            <div className={styles.ticketTime}><span><b>DATE</b><strong>Sabtu</strong></span><span><b>TIME</b><strong>01:23 — 01:23</strong></span></div>
            <p>SEATS</p><h3>A1</h3>
          </div>
        </article>
      </section>
      <footer className={styles.resetBar}>
        <div><strong>Returning to Home in {seconds} seconds</strong><span>This kiosk will reset automatically</span></div><i style={{ width: `${seconds * 10}%` }} />
      </footer>
    </main>
  );
}
