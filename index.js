var debug = require("@istani/debug")(require('./package.json').name);
debug.log('Imported');

const Knex = require('knex');
exports._knex = Knex(require('./knexfile.js'));

const { raw } = require('objection');
exports._raw = raw;


// Syth User (Streamer) Details:
exports.User_Channel = require("./models/channel.js");

// Rpg Details
exports.RPG_Characters = require('./models/rpg_char.js');
exports.RPG_Monsters = require('./models/rpg_monster.js');
exports.RPG_Inventories = require('./models/rpg_inventory.js');
exports.RPG_Logs = require('./models/rpg_log.js');
