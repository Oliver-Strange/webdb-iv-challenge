const db = require("../data/dbConfig.js");

module.exports = {
  findDishes,
  findDishById,
  addDish
};

function findDishes() {
  return db("dishes");
}

function findDishById(id) {
  return db("dishes")
    .where({ id })
    .first();
}

function addDish(dish) {
  return db("dishes")
    .insert(dish)
    .then(ids => {
      const [id] = ids;
      return db("dishes")
        .where({ id })
        .first();
    });
}
