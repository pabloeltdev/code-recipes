import { Icon } from "@iconify/react/dist/iconify.js";

import styles from "@/assets/styles/recipe_card.module.css";

import Card from "@/components/ui/Card";
import LabelsList from "@/components/ui/LabelsList";
import Button from "@/components/ui/Button";

export default function RecipeCard() {
  return (
    <Card>
      <div>
        <div className="title">Composition</div>
      </div>
      <div className={styles.footer}>
        <LabelsList />
        <Button>
          <Icon fontSize={20} icon="heroicons:code-bracket-solid" />
        </Button>
      </div>
    </Card>
  );
}
