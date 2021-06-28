const { listAll, findOne } = require('../../../../db/mongodb/models/departments');


module.exports = (ctx) => {
  return async (req, res) => {
    const { headers, params, query, body } = req;
    if (params.id) {
      const department = await findOne(params.id);
      return res.send(department);
    }
    const departments = await listAll();
    return res.send(departments);
  };
};
