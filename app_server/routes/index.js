var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

router.get('/', ctrlMain.jobs);
router.get('/delete/:id', ctrlMain.delete);





module.exports = router;
