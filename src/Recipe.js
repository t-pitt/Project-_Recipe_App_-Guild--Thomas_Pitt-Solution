import React from "react";

function Recipe({ recipe, index, deleteHandler }) {
  return (
    <tr>
      <td>
        <p>{recipe.name}</p>
      </td>
      <td>
        <p>{recipe.cuisine}</p>
      </td>
      <td>
        <img src={recipe.photo} />
      </td>
      <td>
        <p>{recipe.ingredients}</p>
      </td>
      <td>
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={() => deleteHandler(index)}>Delete</button>
      </td>
    </tr>
  );
};

export default Recipe;