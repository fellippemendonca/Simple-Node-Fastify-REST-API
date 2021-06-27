const auth = require('../middleware/auth');
const controllers = require('../controllers');


const v1Customers = controllers.v1.customers;
const v1Departments = controllers.v1.departments;


// V1 endpoints context
function v1(ctx) {
  return async (fastify) => {
    fastify.get('/customers', v1Customers.findCustomers(ctx));
    fastify.get('/customers/:id', v1Customers.findCustomers(ctx));

    fastify.get('/departments', v1Departments.getDepartments(ctx));
    fastify.get('/departments/:id', v1Departments.getDepartmentsById(ctx));
    fastify.put('/departments', v1Departments.putDepartments(ctx));
    fastify.post('/departments', v1Departments.postDepartments(ctx));
    fastify.patch('/departments', v1Departments.patchDepartments(ctx));
    fastify.patch('/departments/:id/place/:place', v1Departments.patchDepartmentsAddFields(ctx));
    fastify.delete('/departments/:id', v1Departments.deleteDepartments(ctx));
  };
};

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
