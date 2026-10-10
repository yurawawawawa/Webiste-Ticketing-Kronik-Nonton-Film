"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "@/app/knf.module.css";
import { BookingHeader } from "./booking-header";

const rows = ["A", "B", "C", "D", "E", "F"];
const soldSeats = new Set(["A2", "A7", "B5", "B9", "C1", "C6", "D4", "D9", "E2", "E9", "F3", "F7"]);

export function SeatMap() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggleSeat(seat: string) {
    if (soldSeats.has(seat)) return;
    setSelected((current) => current.includes(seat) ? current.filter((item) => item !== seat) : [...current, seat]);
  }

  return (
    <main className={styles.paperPage}>
      <div className={styles.seatPage}>
        <BookingHeader active={2} backHref="/program" />
        <section className={styles.seatTitleRow}>
          <div><p className={styles.eyebrow}>CHOOSE YOUR SEATS</p><h1>Judul Program</h1></div>
          <div className={styles.seatDate}><strong>Sabtu</strong><span>01:23 — 01:23</span></div>
          <SeatLegend soldLabel="Sold" />
        </section>
        <div className={styles.auditorium}>
          <div className={styles.screen}>SCREEN</div>
          <div className={styles.seatGrid}>
            {rows.map((row) => (
              <div className={styles.seatRow} key={row}>
                <b>{row}</b>
                <div>
                  {Array.from({ length: 10 }, (_, index) => {
                    const seat = `${row}${index + 1}`;
                    const sold = soldSeats.has(seat);
                    const active = selected.includes(seat);
                    return (
                      <button
                        className={`${styles.seat} ${sold ? styles.seatSold : ""} ${active ? styles.seatSelected : ""}`}
                        disabled={sold}
                        aria-pressed={active}
                        aria-label={`Seat ${seat}${sold ? ", sold" : ""}`}
                        onClick={() => toggleSeat(seat)}
                        key={seat}
                      >{index + 1}</button>
                    );
                  })}
                </div>
                <b>{row}</b>
              </div>
            ))}
          </div>
          <p className={styles.screenWay}>SCREEN THIS WAY ↑</p>
          <div className={styles.seatTray}>
            <div><b>YOUR SEATS</b><strong>{selected.length ? selected.join(", ") : "None selected"}</strong></div>
            <span>{selected.length} {selected.length === 1 ? "seat" : "seats"}</span>
            {selected.length ? <Link href="/booking">Confirm Seats →</Link> : <button disabled>Confirm Seats →</button>}
          </div>
        </div>
      </div>
    </main>
  );
}

export function SeatLegend({ soldLabel }: { soldLabel: string }) {
  return (
    <div className={styles.seatLegend}>
      <span><i />Available</span><span><i className={styles.legendSelected} />Selected</span><span><i className={styles.legendSold} />{soldLabel}</span>
    </div>
  );
}
