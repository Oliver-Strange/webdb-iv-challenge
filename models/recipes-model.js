const db = require("../data/dbConfig.js");

module.exports = {
  findRecipes,
  findRecipeById,
  addRecipe
};

function findRecipes() {
  return db("recipes as r")
    .join("dishes as d", "r.recipe_id", "d.dish_id")
    .select("r.name as recipeName", "d.name as dishName")
    .where({ dish_id: id });
}

function findRecipeById(id) {
  return db("recipes")
    .where({ dish_id: id })
    .first();
}

async function addRecipe(recipe) {
  const [id] = await db("recipes").insert(recipe);
  return findRecipeById(id);
}
