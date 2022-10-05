const express = require('express');
// const  verifyIfExistsAccount  = require('./middlewares/verifyIfExistsAccount');
const AccountRoute = require('./routes/AccountRoute');
const StatementRoute = require('./routes/StatementRoute');
const DepositRoute = require('./routes/DepositRoute');

const app = express();
const port = 3333;

app.use(express.json());
app.use(AccountRoute, StatementRoute, DepositRoute);


// app.post('/deposit', verifyIfExistsAccount, (req, res) => {
//     const { description, amount } = req.body;
//     const { customer } = req;
//     const statementOperation = {
//         description,
//         amount,
//         created_at: new Date(),
//         type: 'credit'
//     }
//     customer.statement.push(statementOperation);
//     return res.status(201).send();

// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});