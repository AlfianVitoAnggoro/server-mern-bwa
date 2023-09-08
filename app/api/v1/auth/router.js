const express = require('express');
const router = express();
const { singinCms } = require('./controller');

router.post('/auth/signin', singinCms);

module.exports = router;
