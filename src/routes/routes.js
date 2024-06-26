const express = require('express');
const controller = require('../controllers/controllers');
const { body } = require('express-validator');
const router = new express.Router();

router.get('/init', controller.initDatabase);
router.get('/', controller.getNames);
router.post('/fullcycle', 
    body('firstname').not().isEmpty().escape(),
    body('lastname').not().isEmpty().escape(), 
    controller.addName
);

module.exports = router;