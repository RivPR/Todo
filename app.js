var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'app_server', 'views'));

var handlebars = require('express-handlebars').create({defaultLayout:'../../app_server/views/layouts/main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use('/', require('./app_server/routes/index'));


app.use(function(req, res){
    res.status(404);
    res.send('404 error');
 });
app.use(function(err, req, res, next){
  console.log(err.stack);
  res.status(500);
  res.send('500 error');
 });
app.listen(3000, function(){
  console.log('Todo app started on http://localhost:' + 3000 +
 '; press ctrl-c to terminate.');
 });
