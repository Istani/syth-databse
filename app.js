var data = require("@syth/database");  

async function TestConnection() {
  var tables = await data._knex.raw('SHOW Tables;');
  console.log(tables);
  process.exit(0);
}
TestConnection();