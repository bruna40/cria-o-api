const express = require('express');
const  verifyIfExistsAccount  = require('../middlewares/verifyIfExistsAccount');
const BalanceController = require('../controllers/BalanceController');

const router = express.Router();

router.get('/balance', verifyIfExistsAccount, BalanceController.index);

module.exports = router;
