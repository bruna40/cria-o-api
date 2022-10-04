const  { Router } = require('express');
const StatementController = require('../controllers/StatementController');

const router = Router();

router.get('/statement', StatementController);

module.exports = router;