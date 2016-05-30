var mysql = require('../models/mysql.js');

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
      res.redirect('/');
    });

  });
};

module.exports.edit = function(req, res) {

  mysql.getConnection(function(err, con){

    con.query(('SELECT * FROM tracker WHERE id = ' + req.params.id), function(err, rows){
      if(err) throw err;
      console.log('Job number : ' + req.params.id + ' was selected to be edited!');
      res.render('index', { job: rows });
    });

  });
}


module.exports.add = function(req, res){

    var name = req.body.name;
    console.log('this is name ' + name);
    var date = req.body.date;
    console.log('this is the date ' + date )
    var comments = req.body.comments;
    console.log('this are the comments ' + comments);

    mysql.getConnection(function(err, con){
      con.query( 'INSERT INTO tracker (id, name, date, comments) VALUES (NULL , \'' + name + '\', '
                + '\'' + date + '\', ' + '\'' + comments + '\')' );
    });
     res.redirect('/');
};

module.exports.update = function(req, res){
  console.log('inside update ' + req );

  var name = req.body.name;
  var date = req.body.date;
  var comments = req.body.comments;
  var id = req.body.id;
  console.log('NAME!!!: ' + name + ' DATE!!: ' + date + ' COMMENTS!: ' + comments + ' id: ' + id);

  mysql.getConnection(function(err, con){
    con.query('UPDATE tracker SET name=\'' + name + '\', date= \'' + date
            + '\', comments=\'' + comments + '\'' + 'WHERE id =\'' + id + '\'' );
  console.log('in getconn update!' + req.query);
  });
    res.redirect('/');
}
