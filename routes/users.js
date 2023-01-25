const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is user page')
});

router.get('/login', (req, res) => {
    res.send('this is user login page')
});

module.exports = router