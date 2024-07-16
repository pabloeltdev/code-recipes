import styles from "@/assets/styles/recipes_page.module.css";

import RecipeCard from "@/components/RecipeCard";
import { Recipe } from "@/types/recipe";

export default function Recipes() {
  const recipe: Recipe = {
    title: "Composition",
    labels: ["React", "Design Pattern"],
  };
  const recipes = Array(15).fill(recipe);
  return (
    <main>
      <div className={styles.recipesContainer}>
        {recipes.map((r) => (
          <RecipeCard recipe={r} />
        ))}
      </div>
    </main>
  );
}
