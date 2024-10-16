const { Model } = require("objection");
const Knex = require("knex");
const emoji = require("node-emoji");

const knex = Knex(require("../knexfile.js"));

Model.knex(knex);

class Char extends Model {
  static get tableName() {
    return "rpg_itmes";
  }
  static get idColumn() {
    return "name";
  }

  $beforeInsert() {
    this.$beforeUpdate();
  }

  $beforeUpdate() {
    //this.updated_at = new Date().toISOString();
    this.icon = emoji.unemojify(this.icon);
  }
}

module.exports = Char;
