module.exports = async (req, res) => {
  if (req.headers['x-auth-token'] !== process.env.AUTH_TOKEN) {
    return res.code(403).send('INVALID_AUTH_TOKEN');
  }
};
