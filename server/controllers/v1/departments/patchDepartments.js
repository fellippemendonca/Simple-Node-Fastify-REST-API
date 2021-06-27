const { patch } = require('../../../../db/mongodb/models/departments');


module.exports = (ctx) => {
  return async (req, res) => {
    const department = await patch(req.body);
    return res.send(department);
  };
};
