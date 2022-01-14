var express = require("express");
var router = express.Router();
const { formatDate } = require("../utils/formatDate");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: formatDate(new Date()),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formatDate(new Date()),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages: messages });
});
router.get("/new", (req, res) => {
  res.render("create");
});
router.post("/new", (req, res) => {
  const message = {
    user: req.body.user,
    text: req.body.text,
    added: formatDate(new Date()),
  };
  messages.push(message);
  res.redirect("/");
});

module.exports = router;
