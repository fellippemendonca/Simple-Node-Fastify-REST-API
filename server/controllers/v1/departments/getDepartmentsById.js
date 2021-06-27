const { findOne } = require('../../../../db/mongodb/models/departments');


module.exports = (ctx) => {
  return async (req, res) => {
    const { id } = req.params;
    const department = await findOne(id);
    return res.send(department);
  };
};
