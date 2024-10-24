var debug = require("@istani/debug")(require('./package.json').name);

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
exports.RPG_Items = require('./models/rpg_items.js');
exports.RPG_Story = require('./models/rpg_story.js');

// Stream Details
exports.User_Channels = require('./models/channel.js');
exports.User_Chat_Servers = require("./models/chat_server.js");
exports.User_Chat_Peoples = require("./models/chat_user.js");
exports.User_Chat_Massages = require("./models/chat_message.js");
