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

    static showByDate(req, res) {
        const { customer } = req;
        const { date } = req.query;
        const dateFormat = new Date(date + ' 00:00');
        const statement = customer.statement.filter(
            (statement) => statement.created_at.toDateString() === new Date(dateFormat).toDateString()
        );
        return res.json(statement);
    }
}

module.exports = StatementController;