const auth = require('../middleware/auth');
const v1 = require('./v1');

// Internal-API context
function api(ctx) {
  return async (fastify) => {
    fastify.addHook('onRequest', auth);
    fastify.register(v1(ctx), { prefix: '/v1' });
  };
};

// Open-API context
function oapi(ctx) {
  return async (fastify) => {
    fastify.register(v1(ctx), { prefix: '/v1' });
  };
};

// Routes Build Export
module.exports = (fastify, ctx) => {
  fastify.register(api(ctx), { prefix: '/api' });
  fastify.register(oapi(ctx), { prefix: '/oapi' });
};
