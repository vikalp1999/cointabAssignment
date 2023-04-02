const express= require("express");
const { signup ,login} = require("../controller/user.controller");
let Router= express.Router();

Router.route("/signup").post(signup);
Router.route("/login").post(login)

module.exports= Router;