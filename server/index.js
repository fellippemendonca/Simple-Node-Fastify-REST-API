const Fastify = require('fastify');
const MongoDB = require('../db/mongodb');
 
const routes = require('./routes');

// Class Server
function Server() {

  // init Fastify
  this.fastify = Fastify({ logger: true });
}

// Class Server Method Init
Server.prototype.init = function() {

  const mongoDB = new MongoDB(process.env.MONGO_DB_URL);
  
  const ctx = {
    mongoDbConn: mongoDB.init()
  };
  // assign routes to Fastify service
  routes(this.fastify, ctx);
  
  return this.fastify;
}

// Class Server Method Listen
Server.prototype.listen = async function(port = process.env.PORT || 3000, host = '0.0.0.0') {

  // Start Fastify service listening on port .env NUMBER
  try {
    await this.fastify.listen(port, host);
  } catch (error) {
    this.fastify.log.error(error);
    process.exit(1);
  }

  return this.fastify;
}

module.exports = Server;
