const auth = require('../middleware/auth');
const controllers = require('../controllers');

// V1 endpoints context
function v1(ctx) {
  return async (fastify) => {
    fastify.get('/customers', controllers.v1.findCustomers(ctx));
    fastify.get('/customers/:id', controllers.v1.findCustomers(ctx));
  };
};

// V2 endpoints context
function v2(ctx) {
  return async (fastify) => {
    fastify.get('/customers', controllers.v2.findCustomers(ctx));
    fastify.get('/customers/:id', controllers.v2.findCustomers(ctx));
  };
};

// Internal-API context
function api(ctx) {
  return async (fastify) => {
    fastify.addHook('onRequest', auth);
    fastify.register(v1(ctx), { prefix: '/v1' });
    fastify.register(v2(ctx), { prefix: '/v2' });
  };
};

// Open-API context
function oapi(ctx) {
  return async (fastify) => {
    fastify.register(v1(ctx), { prefix: '/v1' });
    fastify.register(v2(ctx), { prefix: '/v2' });
  };
};

// Routes Build Export
module.exports = (fastify, ctx) => {
  fastify.register(api(ctx), { prefix: '/api' });
  fastify.register(oapi(ctx), { prefix: '/oapi' });
};
