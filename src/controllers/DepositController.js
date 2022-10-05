class DepositController {
    static create(req,res) {
        const { description, amount } = req.body;
        const { customer } = req;
        const statementOperation = {
            description,
            amount,
            created_at: new Date(),
            type: 'credit',
        }
        customer.statement.push(statementOperation);
        return res.status(201).send({message: 'Deposit created successfully'});
    }
}

module.exports = DepositController;