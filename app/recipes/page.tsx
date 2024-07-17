import styles from "@/assets/styles/recipes_page.module.css";

import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/ui/SearchBar";
import { Recipe } from "@/types/recipe";

export default function Recipes() {
  const recipe: Recipe = {
    title: "Composition",
    labels: ["React", "Design Pattern"],
  };
  const recipes = Array(15).fill(recipe);
  return (
    <main>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
      </div>
      <div className={styles.recipesContainer}>
        {recipes.map((r, i) => (
          <RecipeCard key={i} recipe={r} />
        ))}
      </div>
    </main>
  );
}
