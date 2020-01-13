const path = require('path');

const express = require('express');
const router = express.Router();

//allConferences
router.get('/', (req, res) => {
    res.render('item/index');
});

router.get('/add', (req, res) => {
    res.render('item/add');
});

module.exports = router;