var express = require("express");
var router = express.Router();
const moment = require("moment");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages: messages, title: "Messages" });
});
router.get("/new", (req, res) => {
  res.render("create");
});
router.post("/new", (req, res) => {
  const message = {
    user: req.body.user,
    text: req.body.text,
    added: new Date(),
  };
  messages.push(message);
  res.redirect("/");
});

module.exports = router;
