const { v4:uuidv4 } = require('uuid');

const customers = [];

class AccountController {
    static create = (req, res) => {
        const { cpf, name } = req.body;
        const customerAlreadyExists = customers.some(
            (customer) => customer.cpf === cpf
        );
        if(customerAlreadyExists) {
            return res.status(400).json({ error: 'Customer already exists!' });
        }
    
        customers.push({ 
            cpf,
            name,
            id:uuidv4(),
            statement: []
        })
        return res.status(201).json({menssage: 'Customer created!'});
    }
}

module.exports = AccountController;