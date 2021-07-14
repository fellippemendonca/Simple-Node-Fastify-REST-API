const { Client } = require('pg');

function PostgreSql() {
  this.client = new Client();
}

PostgreSql.prototype.connect = async function() {
  try {
    await this.client.connect();
  } catch(error) {
    console.log(error.stack);
  }
}

PostgreSql.prototype.disconnect = async function() {
  try {
    await this.client.end();
  } catch(error) {
    console.log(error.stack);
  }
}

PostgreSql.prototype.query = async function(query = 'SELECT $1::text as message', params = ['Hello world!']) {
  try {
    const result = await this.client.query(query, params);
    return result;
  } catch(error) {
    console.log(error.stack);
  }
}

module.exports = PostgreSql;
