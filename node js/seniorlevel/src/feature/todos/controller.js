module.exports.controler = (req, res) => {
  const { user } = req.quary;
  res.send({ massage: `valid user${user}` });
};
