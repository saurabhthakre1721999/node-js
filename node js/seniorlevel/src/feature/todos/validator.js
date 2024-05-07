module.exports.validatoruserparams = (req, res, next) => {
  const { user } = req.query;
  if (!user || user !== "saurabh") {
    res.send({ massage: "not valid user" });
  }
  next();
};
