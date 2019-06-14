exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { name: "chicken breast" },
    { name: "taco seasoning" },
    { name: "potatoes" }
  ]);
};
