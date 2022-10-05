const express = require('express');
const  verifyIfExistsAccount  = require('../middlewares/verifyIfExistsAccount');
const DepositController = require('../controllers/DepositController');

const router = express.Router();

router.post('/deposit', verifyIfExistsAccount, DepositController.create);

module.exports = router;

