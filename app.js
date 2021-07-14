const Server = require('./server');

// Instance of the Server
const server = new Server();

// Initialize API Routes and DB connections
server.init();

// Initialize API Listener
server.listen();

process.on('SIGTERM', function () {
  server.shutdown();
  process.exit(0);
});
