const v1 = require('../../controllers/v1');


// V1 endpoints context
module.exports = (ctx) => {
  return async (app) => {
    app.get('/customers', v1.customers.findCustomers(ctx));
    app.get('/customers/:id', v1.customers.findCustomers(ctx));

    app.get('/departments', v1.departments.findDepartments(ctx));
    app.get('/departments/:id', v1.departments.findDepartments(ctx));
  };
};
