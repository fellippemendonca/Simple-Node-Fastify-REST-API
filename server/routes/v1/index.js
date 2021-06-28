const v1 = require('../../controllers/v1');


// V1 endpoints context
module.exports = (ctx) => {
  return async (fastify) => {
    fastify.get('/customers', v1.customers.findCustomers(ctx));
    fastify.get('/customers/:id', v1.customers.findCustomers(ctx));

    fastify.get('/departments', v1.departments.findDepartments(ctx));
    fastify.get('/departments/:id', v1.departments.findDepartments(ctx));
  };
};
