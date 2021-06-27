const { addFields } = require('../../../../db/mongodb/models/departments');


module.exports = (ctx) => {
  return async (req, res) => {
    const { id, place } = req.params;
    const payload = req.body;
    const department = await addFields({ id, place, payload });
    return res.send(department);
  };
};
