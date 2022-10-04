const express = require('express');
const  verifyIfExistsAccount  = require('./middlewares/verifyIfExistsAccount');
const AccountRoute = require('./routes/AccountRoute');
const StatementRoute = require('./routes/StatementRoute');

const app = express();
const port = 3333;

app.use(express.json());
app.use(AccountRoute, StatementRoute);


// const customers = [];

// app.get('/statement/:cpf', (req, res) => {
//     const { cpf } = req.params;
//     const customer = customers.find(customer => customer.cpf === cpf); 
//     if (!customer) {
//         return res.status(400).json({ error: 'Customer not found!' });
//     }
//     return res.json(customer.statement);
// });

// app.get('/statement', verifyIfExistsAccount, (req, res) => {
//     const { customer } = req;
//     return res.json(customer.statement);
// });

app.post('/deposit', verifyIfExistsAccount, (req, res) => {
    const { description, amount } = req.body;
    const { customer } = req;
    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: 'credit'
    }
    customer.statement.push(statementOperation);
    return res.status(201).send();

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});