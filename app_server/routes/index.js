var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', ctrlMain.jobs);
router.get('/delete/:id', ctrlMain.delete);
router.post('/add', ctrlMain.add);
router.get('/edit/:id', ctrlMain.edit);
router.post('/update', ctrlMain.update);





module.exports = router;
