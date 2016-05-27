var mysql = require('../models/mysql.js');

module.exports.index = function(req, res){
  res.render('index', {
    title: '<h1>Your tasks:</h1>'
  });
};
