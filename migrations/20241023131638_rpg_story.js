exports.up = function(knex) {
  return knex.schema.createTable("rpg_story", function(t) {
    t.string("owner", 50);
    t.string("id", 50);

    t.string("user", 255);
    t.string("type", 255);
    t.string("message", 255);
    
    t.timestamps(true, false);

    t.primary(["owner", "id"]);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("rpg_story");
};
