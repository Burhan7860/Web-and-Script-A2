var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Project" });
});
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

module.exports = router;
