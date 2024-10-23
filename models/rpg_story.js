const { Model } = require("objection");
const Knex = require("knex");
const emoji = require("node-emoji");
const moment = require("moment");

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
    this.id=moment().format("x");
  }

  $beforeUpdate() {
    //this.updated_at = new Date().toISOString();
    this.message = emoji.unemojify(this.message);
    this.user = emoji.unemojify(this.user);
  }
}

module.exports = Logs;
