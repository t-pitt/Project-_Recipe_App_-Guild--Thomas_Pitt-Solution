import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, deleteHandler }) {
  const recipesFromList = recipes.map((recipe, index) => (
    <Recipe recipe={recipe} index={index} deleteHandler={deleteHandler} />
  ));

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipesFromList}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
