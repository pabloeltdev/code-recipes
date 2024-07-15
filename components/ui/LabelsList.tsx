import styles from "@/assets/styles/ui/labels_list.module.css";

export default function LabelsList() {
  return (
    <div className={styles.labelsBox}>
      <span className={styles.label}>React</span>
      <span className={styles.label}>Design</span>
      <span className={styles.more}>...</span>
    </div>
  );
}
