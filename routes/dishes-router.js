const router = require("express").Router();

const Dishes = require("../models/dishes-model");
const Recipes = require("../models/recipes-model");

// Dishes
// GET dishes
router.get("/", async (req, res) => {
  try {
    const dishes = await Dishes.findDishes();
    res.status(200).json(dishes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
});

// GET dish by id
router.get("/:id", async (req, res) => {
  try {
    const dish = await Dishes.findDishById(req.params.id);
    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ message: "dish not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
});

// POST add dish
router.post("/", async (req, res) => {
  const dish = req.body;
  if (dish.name) {
    try {
      const inserted = await Dishes.addDish(dish);
      res.status(201).json(inserted);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "server error" });
    }
  } else {
    res.status(400).json({ message: "provide name of dish" });
  }
});

/* Extra
// PUT update dish
router.("", async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500)
        .json({ message: "server error"})
    }
})

// DELETE remove dish
router.("", async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500)
        .json({ message: "server error"})
    }
})
*/

// Recipes
// GET recipes
router.get("/:id/recipes", async (req, res) => {
  try {
    const recipes = await Recipes.findRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
});

// GET recipe by id
router.get("/:id/recipes/:id", async (req, res) => {
  try {
    const recipe = await Recipes.findRecipeById(req.params.id);
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: "recipe not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
});

// POST add recipe
router.post("/:id/recipes", async (req, res) => {
  const recipe = req.body;
  if (recipe.name) {
    try {
      const inserted = await Recipes.addRecipe(recipe);
      res.status(201).json(inserted);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "server error" });
    }
  } else {
    res.status(400).json({ message: "provide name of recipe" });
  }
});

module.exports = router;
