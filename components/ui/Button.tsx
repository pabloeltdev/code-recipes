import { ReactNode } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import styles from "@/assets/styles/ui/button.module.css";

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return <div className={styles.button}>{children}</div>;
}
