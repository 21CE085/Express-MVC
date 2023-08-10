const userModel = require("../models/userModel");

const userController = {
  getLogin(req, res) {
    res.render("login");
  },
  getRegister(req, res) {
    res.render("register");
  },
  postRegister(req, res) {
    const user = req.body;
    const userId = userModel.create(User);
    res.send(`User registered with the ID: ${userID}`);
  },
};

module.exports = userController;
