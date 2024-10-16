exports.up = function(knex, Promise) {
  return knex.schema.createTable("rpg_itmes", function(t) {
    t.string("icon", 50).notNull();
    t.string("name", 50).notNull().primary();
    t.integer("heal").notNull().defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("rpg_itmes");
};
