const  express = require('express');
const StatementController = require('../controllers/StatementController');
const  verifyIfExistsAccount  = require('../middlewares/verifyIfExistsAccount');

const router = express.Router();

router
    .get('/statement', verifyIfExistsAccount, StatementController.show)
    .get('/statement/:cpf', verifyIfExistsAccount, StatementController.showByCpf)
    .get('/statement/date',  verifyIfExistsAccount, StatementController.showByDate);

module.exports = router;