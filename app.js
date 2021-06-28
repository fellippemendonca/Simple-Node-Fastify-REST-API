const Server = require('./server');


const server = new Server();

server.init();
server.listen();


['SIGINT', 'SIGTERM'].forEach(sig => process.on(sig, () => process.exit(0)));
