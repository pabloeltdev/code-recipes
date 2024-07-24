import styles from "@/assets/styles/recipes_page.module.css";

import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/ui/SearchBar";
import { Recipe } from "@/types/recipe";

export default function Recipes() {
  const recipe: Recipe = {
    title: "Composition",
    labels: ["React", "Design Pattern"],
    url: "https://github.dev/pabloeltdev/code-recipes/blob/c5280dd157835109fed88d86c9b685477f49716d/components/ui/Card.tsx",
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
