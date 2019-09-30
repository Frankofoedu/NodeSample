var models = require("../../Models");
var express = require("express");
var router = express.Router();

router.get("/:id", function(req, res) {
  return "hello world";
});
