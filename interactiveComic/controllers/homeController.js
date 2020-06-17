"use strict";

const mysql=require('../models/mysql.js');


exports.showMaker = (req, res) => {
  res.render("maker");
};

exports.showComic = (req, res) => {
  mysql.getWork(9);
  res.render("comic");
};
