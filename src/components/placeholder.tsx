import styles from "@/app/knf.module.css";

type PlaceholderProps = {
  label?: string;
  className?: string;
};

export function Placeholder({ label, className = "" }: PlaceholderProps) {
  return (
    <div className={`${styles.placeholder} ${className}`} aria-label={label || "Image placeholder"}>
      <span className={styles.placeholderLineA} />
      <span className={styles.placeholderLineB} />
      {label ? <span className={styles.placeholderLabel}>{label}</span> : null}
    </div>
  );
}
