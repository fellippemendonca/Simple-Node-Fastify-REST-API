module.exports = (ctx) => {
  return async (req, res) => {
    const { headers, params, query, body } = req;
    return res.status(200).send({ headers, params, query, body });
  };
};
