var express = require('express');
var router = express.Router();

// importing the application routes
var memberRoutes = require('./memberRoutes')
var wordRoutes = require('./wordRoutes')

//invoking all the application routes
router.use('/account', memberRoutes);
router.use('/word', wordRoutes);

// exporting the application routes
module.exports = router;