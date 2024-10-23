const { Model } = require("objection");
const Knex = require("knex");
const emoji = require("node-emoji");

const knex = Knex(require("../knexfile.js"));

Model.knex(knex);

class Logs extends Model {
  static get tableName() {
    return "rpg_story";
  }
  static get idColumn() {
    return "owner, id";
  }

  $beforeInsert() {
    this.$beforeUpdate();
    this.id=moment();
  }

  $beforeUpdate() {
    //this.updated_at = new Date().toISOString();
    this.display_text = emoji.unemojify(this.display_text);
  }
}

module.exports = Logs;
