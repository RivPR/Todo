var mysql = require('../models/mysql.js');

module.exports.index = function(req, res){
  res.render('index', {
    title: '<h1>Your tasks:</h1>'
  });
};

module.exports.jobs = function(req, res){
  mysql.getConnection(function(err, con){
    con.query('SELECT * from tracker', function(err, rows){
      if(err) throw err;
      res.render('index', { title: 'Your jobs: ', jobs: rows });
    });
  });
};

module.exports.delete = function(req, res){
  mysql.getConnection(function(err, con){
    con.query(('DELETE FROM tracker WHERE id = ' + req.params.id), function(err, rows){
      if(err) throw err;
      console.log('Job number : ' + req.params.id + ' was deleted!');
      res.render('delete', { title: '<h2>A job was deleted</h2><br>Your jobs: ', jobs: rows });
    });

  })
}

module.exports.add = function(req, res){
  //todo add logic
}
