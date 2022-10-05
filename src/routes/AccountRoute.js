const express = require('express');
const AccountController = require('../controllers/AccountController');

const router = express.Router();

router.post('/account', AccountController.create);

module.exports = router;