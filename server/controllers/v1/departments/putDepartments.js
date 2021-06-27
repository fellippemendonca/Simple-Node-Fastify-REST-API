const { update } = require('../../../../db/mongodb/models/departments');


module.exports = (ctx) => {
  return async (req, res) => {
    const department = await update(req.body);
    return res.send(department);
  };
};
