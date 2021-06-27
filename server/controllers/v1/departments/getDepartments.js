const { listAll } = require('../../../../db/mongodb/models/departments');


module.exports = (ctx) => {
  return async (req, res) => {
    console.log(`requesting...`);
    const department = await listAll();
    console.log(`DONE!`);
    return res.send(department);
  };
};
