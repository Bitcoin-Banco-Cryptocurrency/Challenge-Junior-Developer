/**
 * here we could organize the code with other http verbs (put, post, delete, etc.) and create his respective controller
 */

const express = require('express');
const router = express.Router();
const controller = require('./controller');

/* GET ask offers listing. */
router.get('/', controller.get_asks);

module.exports = router;
