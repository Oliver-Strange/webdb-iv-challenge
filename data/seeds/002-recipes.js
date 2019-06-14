exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { dish_id: 1, name: "Chicken Marinara" },
    { dish_id: 2, name: "Extra Spicy Beef" },
    { dish_id: 3, name: "Potato Soup" }
  ]);
};
