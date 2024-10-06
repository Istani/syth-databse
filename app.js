var debug = require("@syth/database");  

async function TestConnection() {
  var tables = await debug._knex.raw('SHOW Tables;');
  console.log(tables);
  process.exit(0);
}
TestConnection();