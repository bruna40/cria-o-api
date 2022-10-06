const express = require('express');
const AccountRoute = require('./routes/AccountRoute');
const StatementRoute = require('./routes/StatementRoute');
const DepositRoute = require('./routes/DepositRoute');
const WithdrawRoute = require('./routes/WithdrawRoute');

const app = express();
const port = 3333;

app.use(express.json());
app.use(
  AccountRoute,
  StatementRoute,
  DepositRoute,
  WithdrawRoute,
  );

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});