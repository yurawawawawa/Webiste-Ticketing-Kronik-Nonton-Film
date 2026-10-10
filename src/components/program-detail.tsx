import Link from "next/link";
import styles from "@/app/knf.module.css";
import { BookingHeader } from "./booking-header";
import { Placeholder } from "./placeholder";

type Overlay = "film" | "sold-out" | undefined;

export function ProgramDetail({ overlay }: { overlay?: Overlay }) {
  return (
    <main className={styles.paperPage}>
      <div className={styles.programPage}>
        <BookingHeader active={1} />
        <section className={styles.programIntro}>
          <Placeholder label="Program poster" className={styles.programPoster} />
          <div className={styles.programCopy}>
            <p className={styles.eyebrow}>FESTIVAL PROGRAM</p>
            <h1>Judul Program</h1>
            <p className={styles.description}>Deskripsi Program</p>
            <div className={styles.screening}>
              <b>SCREENING</b><strong>Sabtu</strong><span>01:23 — 01:23</span>
            </div>
          </div>
          <div className={styles.programAction}>
            <span className={styles.outlineBadge}>20 SEATS LEFT</span>
            <Link className={styles.primaryButton} href="/seats">Choose Seat →</Link>
          </div>
        </section>

        <div className={styles.lineupHeading}>
          <h2>Film line-up</h2><span>10 SHORT FILMS</span>
        </div>
        <section className={styles.movieGrid}>
          {Array.from({ length: 6 }, (_, index) => (
            <article className={styles.movieCard} key={index}>
              <Placeholder className={styles.movieStill} />
              <div className={styles.movieInfo}>
                <h3>Judul Film</h3>
                <strong>Nama Sutradara</strong>
                <span>15 Menit</span>
                <Link className={styles.detailButton} href="/program/film">DETAIL FILM</Link>
              </div>
            </article>
          ))}
        </section>
      </div>
      {overlay === "film" ? <FilmOverlay /> : null}
      {overlay === "sold-out" ? <SoldOutOverlay /> : null}
    </main>
  );
}

function FilmOverlay() {
  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="film-title">
      <div className={styles.filmDialog}>
        <div className={styles.filmPosterColumn}>
          <Placeholder label="Film poster" className={styles.filmPoster} />
        </div>
        <Link className={styles.closeCircle} href="/program" aria-label="Close film details">×</Link>
        <div className={styles.filmDetails}>
          <p className={styles.eyebrow}>INFORMASI FILM</p>
          <h2 id="film-title">Judul Film</h2>
          <dl className={styles.filmFacts}>
            <div><dt>SUTRADARA</dt><dd>Nama Sutradara</dd></div>
            <div><dt>DURATION</dt><dd>15 min</dd></div>
            <div><dt>ORIGIN</dt><dd>Asal</dd></div>
          </dl>
          <div className={styles.synopsis}><b>SYNOPSIS</b><p>isi Sinopsis film</p></div>
          <Placeholder label="Film still" className={styles.filmStillWide} />
        </div>
      </div>
    </div>
  );
}

function SoldOutOverlay() {
  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="sold-out-title">
      <div className={styles.soldOutDialog}>
        <Link href="/" className={styles.soldOutClose} aria-label="Close">×</Link>
        <p className={styles.eyebrow}>SEAT AVAILABILITY</p>
        <h2 id="sold-out-title">No Seats<br />Available</h2>
        <div className={styles.soldOutTime}><span>Sabtu</span><strong>01:23 — 01:23</strong></div>
        <Link className={styles.soldOutButton} href="/">Choose Another Program</Link>
      </div>
    </div>
  );
}
