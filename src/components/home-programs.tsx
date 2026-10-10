import Image from "next/image";
import Link from "next/link";
import styles from "@/app/knf.module.css";
import { Placeholder } from "./placeholder";

const programs: ReadonlyArray<{ title: string; subtitle?: string; tone: "blue" | "gray"; sold: boolean }> = [
  { title: "Goresan Awal", tone: "blue", sold: false },
  { title: "Layar Raya", tone: "gray", sold: true },
  { title: "Layar Sebelum Kemana-mana", tone: "gray", sold: true },
  { title: "Layar Spesial:", subtitle: "Minikino Indonesia Raja Jawa Tengah 2026", tone: "blue", sold: false },
  { title: "Layar Kronik", tone: "blue", sold: false },
  { title: "Bincang Tanpa Batas", tone: "blue", sold: false },
  { title: "Bincang Tanpa Batas", tone: "blue", sold: false },
];

export function HomePrograms() {
  return (
    <main className={styles.home}>
      <div className={styles.homeWash} />
      <div className={styles.homeContent}>
        <header className={styles.homeHeader}>
          <Image className={styles.knfLogo} src="/figma/knf-logo.png" alt="KNF 2026" width={88} height={88} priority />
        </header>
        <section className={styles.homeHero} aria-labelledby="festival-programs-title">
          <div className={styles.schedulePill}>PROGRAM SCHEDULE</div>
          <Image id="festival-programs-title" className={styles.festivalTitle} src="/figma/festival-programs.svg" alt="Festival Programs" width={1141} height={181} priority />
        </section>
        <section className={styles.homeGrid} aria-label="Festival programs">
          {programs.map((program, index) => (
            <Link href={program.sold ? "/sold-out" : "/program"} className={`${styles.homeCard} ${program.tone === "gray" ? styles.homeCardGray : styles.homeCardBlue}`} key={`${program.title}-${index}`}>
              <Placeholder label="Program poster" className={styles.homePoster} />
              <div className={styles.homeCardInfo}>
                <div>
                  <h2 className={`${styles.homeCardTitle} ${program.tone === "gray" ? styles.homeCardTitleGray : ""}`}>{program.title}</h2>
                  {program.subtitle ? <p className={styles.homeCardSubtitle}>{program.subtitle}</p> : null}
                </div>
                <div className={`${styles.homeSchedule} ${program.tone === "gray" ? styles.homeScheduleGray : ""}`}>
                  <span>Sabtu</span><strong>01:23 — 01:23</strong>
                </div>
                <span className={`${styles.homeStatus} ${program.sold ? styles.homeStatusSold : ""}`}>{program.sold ? "Sold out" : "20 seats left"}</span>
              </div>
            </Link>
          ))}
        </section>
        <footer className={styles.homeFooter}>KNF 2026</footer>
      </div>
    </main>
  );
}
