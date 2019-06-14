exports.seed = function(knex, Promise) {
  return knex("dishes").insert([
    { name: "Pasta" },
    { name: "Tacos" },
    { name: "Soup" }
  ]);
};
