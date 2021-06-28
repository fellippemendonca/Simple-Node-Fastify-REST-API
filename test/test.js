const assert = require('assert');

const Server = require('../server');
const server = new Server();
let app;

before('Init services connections', function() {
  app = server.init();
});

describe('Testing Server Endpoints', () => {
  let departmentId;
  it('Get all departments', async () => {
    const { statusCode, body } = await app.inject({
      method: 'GET',
      url: '/api/v1/departments',
      payload: null,
      headers: {
        'content-type': 'application/json',
        'x-auth-token': 'abc'
      }
    });
    assert.strictEqual(statusCode, 200);
    assert(body.length > 0);
    departmentId = body[0]._id;
  });

  it('Get department by ID', async () => {
    const { statusCode, body } = await app.inject({
      method: 'GET',
      url: `/api/v1/departments/${departmentId}`,
      payload: null,
      headers: {
        'content-type': 'application/json',
        'x-auth-token': 'abc'
      }
    });
    assert.strictEqual(statusCode, 200);
    assert(body._id === departmentId);
  });
});

after('Close services connections', function() {
  server.shutdown();
});
