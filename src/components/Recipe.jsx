import styles from "./Recipe.module.scss";
import recipe from "../assets/images/pizza.avif";

function Recipe() {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={recipe} alt="recipe" />
      </div>

      <div
        className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}
      >
        <h3>Pizza</h3>
      </div>
    </div>
  );
}

export default Recipe;
