const { create } = require('../../../../db/mongodb/models/departments');


module.exports = (ctx) => {
  return async (req, res) => {
    const department = await create(req.body);
    return res.send(department);
  };
};
