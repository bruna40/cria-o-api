const { v4:uuidv4 } = require('uuid');

const customers = require('../utils/array');

class AccountController {
    static create(req, res) {
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

    static update(req, res) {
        const { name } = req.body;
        const { customer } = req;
        customer.name = name;
        return res.status(201).json({menssage: 'Customer updated!'});
    }

    static show(req, res) {
        const { customer } = req;
        return res.json(customer);
    }

    static delete(req, res) {
        const { customer } = req;
        customers.splice(customer, 1);
        return res.status(200).json({menssage: 'Customer deleted!'});
    }
}

module.exports = AccountController;