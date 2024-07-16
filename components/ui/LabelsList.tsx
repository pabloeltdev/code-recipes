import styles from "@/assets/styles/ui/labels_list.module.css";

type LabelListProps = {
  labels: string[];
};

export default function LabelsList({ labels }: LabelListProps) {
  return (
    <div className={styles.labelsBox}>
      {labels.map((label) => (
        <span className={styles.label}>{label}</span>
      ))}
      <span className={styles.more}>...</span>
    </div>
  );
}
