import { Icon } from "@iconify/react/dist/iconify.js";

import styles from "@/assets/styles/recipe_card.module.css";

import Card from "@/components/ui/Card";
import LabelsList from "@/components/ui/LabelsList";
import Button from "@/components/ui/Button";
import { Recipe } from "@/types/recipe";
import Link from "next/link";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { title, labels } = recipe;
  return (
    <Card>
      <div>
        <div className="title">{title}</div>
      </div>
      <div className={styles.footer}>
        <LabelsList labels={labels} />
        <Link href={recipe.url} target="_blank" rel="noreferrer noopener">
          <Button>
            <Icon fontSize={20} icon="heroicons:code-bracket-solid" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
