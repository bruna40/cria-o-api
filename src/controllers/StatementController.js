const customers = require('../utils/array');

class StatementController {
    static show(req, res) {
        const { customer } = req;
        return res.json(customer.statement);
    }

    static showByCpf(req, res) {
        const { cpf } = req.params;
        const customer = customers.find(customer => customer.cpf === cpf); 
        if (!customer) {
            return res.status(400).json({ error: 'Customer not found!' });
        }
        return res.json(customer.statement);
    }
}

module.exports = StatementController;