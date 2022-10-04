// const { Router } = require('express');
// const StatementController = require('../controllers/StatementController');

// const router = Router();

// router.post('/statement', StatementController.create);

// module.exports = router;

const express = require('express');
const AccountController = require('../controllers/AccountController');

const router = express.Router();

router.post('/account', AccountController.create);

module.exports = router;