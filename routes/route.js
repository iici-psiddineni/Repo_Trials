const express = require('express');
const router = express.Router();

router.get('/physicians', (req, res, next)=>{
    res.send('Retrieving physician list');
})

module.exports = router;