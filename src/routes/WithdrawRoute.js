const  express = require('express');
const  verifyIfExistsAccount  = require('../middlewares/verifyIfExistsAccount');
const  WithdrawController  = require('../controllers/withdrawController');

const router = express.Router();

router
    .post('/withdraw', verifyIfExistsAccount, WithdrawController.create);

module.exports = router;