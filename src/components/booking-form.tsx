"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "@/app/knf.module.css";
import { BookingHeader } from "./booking-header";
import { SeatLegend } from "./seat-map";

export function BookingForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const valid = name.trim().length > 1 && contact.trim().length > 2;

  return (
    <main className={`${styles.paperPage} ${styles.bookingFrame}`}>
      <div className={styles.bookingBackdrop}>
        <BookingHeader active={2} backHref="/seats" wide />
        <section className={styles.bookingSeatTitle}>
          <div><p className={styles.eyebrow}>CHOOSE YOUR SEATS</p><h1>New Indonesian Voices</h1></div>
          <div><strong>Saturday, 18 July 2026</strong><span>12:30 — 14:10 · Auditorium 1</span></div>
          <SeatLegend soldLabel="Occupied" />
        </section>
        <div className={styles.bookingAuditorium}>
          <div className={styles.screen}>SCREEN</div>
          <div className={styles.backdropSeats} aria-hidden>
            {Array.from({ length: 60 }, (_, index) => <span key={index}>{(index % 10) + 1}</span>)}
          </div>
          <div className={styles.backdropTray}><b>YOUR SEATS<br /><strong>A8</strong></b><span>1 seat</span><button>Confirm Seats →</button></div>
        </div>
      </div>

      <div className={styles.bookingOverlay}>
        <form className={styles.bookingDialog} onSubmit={(event) => event.preventDefault()}>
          <div className={styles.bookingDialogTitle}><p className={styles.eyebrow}>STEP 3 OF 3</p><h2>Your Details</h2></div>
          <div className={styles.bookingFields}>
            <label>FULL NAME *<input value={name} onChange={(event) => setName(event.target.value)} aria-label="Full name" /></label>
            <label>INSTAGRAM/PHONE NUMBER *<input value={contact} onChange={(event) => setContact(event.target.value)} aria-label="Instagram or phone number" /></label>
          </div>
          <div className={styles.seatSummary}><span>YOUR SEAT</span><strong>A1</strong></div>
          <div className={styles.bookingActions}>
            <Link href="/seats">← Back</Link>
            {valid ? <Link className={styles.bookingConfirm} href="/success">Confirm Booking →</Link> : <button className={styles.bookingConfirm} disabled>Confirm Booking →</button>}
          </div>
        </form>
      </div>
    </main>
  );
}
