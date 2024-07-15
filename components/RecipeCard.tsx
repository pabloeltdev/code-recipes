import styles from "@/assets/styles/recipe_card.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";

import Card from "@/components/ui/Card";
import LabelsList from "./ui/LabelsList";

export default function RecipeCard() {
  return (
    <Card>
      <div>
        <div className="title">Composition</div>
      </div>
      <div className={styles.footer}>
        <LabelsList />
        <div className={styles.open}>
          <Icon fontSize={20} icon="heroicons:code-bracket-solid" />
        </div>
      </div>
    </Card>
  );
}
