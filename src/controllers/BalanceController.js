const getBalance = require('../services/functions');

class BalanceController {
    static index(req,res) {
        const { customer } = req;
        const balance = getBalance(customer.statement);
        return res.json(balance);
    }

}

module.exports = BalanceController;