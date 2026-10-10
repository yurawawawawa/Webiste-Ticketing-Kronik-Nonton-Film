import Link from "next/link";
import styles from "@/app/knf.module.css";

type BookingHeaderProps = {
  active: 1 | 2 | 3;
  backHref?: string;
  wide?: boolean;
};

export function BookingHeader({ active, backHref = "/", wide = false }: BookingHeaderProps) {
  return (
    <header className={`${styles.bookingHeader} ${wide ? styles.bookingHeaderWide : ""}`}>
      <Link className={styles.backButton} href={backHref}>
        <span aria-hidden>←</span><span>Back</span>
      </Link>
      <div className={styles.progress} aria-label={`Booking step ${active} of 3`}>
        {[1, 2, 3].map((step, index) => (
          <span className={styles.progressGroup} key={step}>
            {index > 0 ? <i /> : null}
            <b className={active === step ? styles.progressActive : ""}>
              {step} {step === 1 ? "Program" : step === 2 ? "Seats" : "Done"}
            </b>
          </span>
        ))}
      </div>
      <div className={styles.wordmark}>KNF 2026</div>
    </header>
  );
}
