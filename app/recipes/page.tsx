import RecipeCard from "@/components/RecipeCard";
import { Recipe } from "@/types/recipe";

export default function Recipes() {
  const recipe: Recipe = {
    title: "Composition",
    labels: ["React", "Design Pattern"],
  };
  return (
    <main>
      <RecipeCard recipe={recipe} />
    </main>
  );
}
