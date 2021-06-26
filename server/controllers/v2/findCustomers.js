module.exports = (ctx) => {
  return async (req, res) => {
    console.log(ctx);
    // const { body } = req;
    // const { keywords, url } = body;
    // const result = await saveFile('../python/input2.json', { keywords, input: inputs });
    // const result = await readFile('../python/input.json');
    return res.status(200).send({ hello: 'world' });
  };
};