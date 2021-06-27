const { remove } = require('../../../../db/mongodb/models/departments');


module.exports = (ctx) => {
  return async (req, res) => {
    const { id } = req.params;
    const department = await remove(id);
    return res.send(department);
  };
};
