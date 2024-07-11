import { ReactNode } from "react";

import styles from "@/assets/styles/ui/card.module.css";

type CardProps = {
  children: ReactNode;
};

// Its just a component made for reuse the style
export default function Card({ children }: CardProps) {
  return <div className={styles.card}>{children}</div>;
}
