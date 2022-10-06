const express = require('express');
const  verifyIfExistsAccount  = require('../middlewares/verifyIfExistsAccount');
const AccountController = require('../controllers/AccountController');

const router = express.Router();

router
    .post('/account', verifyIfExistsAccount, AccountController.create)
    .put('/account', verifyIfExistsAccount, AccountController.update)
    .get('/account', verifyIfExistsAccount, AccountController.show)
    .delete('/account', verifyIfExistsAccount, AccountController.delete);

module.exports = router;