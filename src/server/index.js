const express = require('express');
const {DRINK_TYPES, ORDER_TIME} = require('./constants.js');
const PORT = 8000;

const drinks = {
  BEER: {
    serving: 0,
    max: 2
  },
  DRINK: {
    serving: 0,
    max: 1
  },
}

const orderHistory = [];

const processRequest = (type, customerNumber) => {
  if (!drinks[type]) {
    return false;
  }

  const { serving, max } = drinks[type];

  if (serving < max) {
    drinks[type].serving = serving + 1;
    setTimeout(() => {
      orderHistory.push({ type: type, customerNumber: customerNumber });
      drinks[type].serving = drinks[type].serving - 1;
    }, ORDER_TIME);

    return true;
  }

  return false;
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.post('/', function(req, res) {
  const { customerNumber, type } = req.body;

  console.log(`Incoming request from customer ${customerNumber} for a drink type ${type}`);

  const isMakingDrink = processRequest(type, customerNumber);

  if (isMakingDrink) {
    res.status(200).send(`Making your ${type}`);
  } else {
    res.status(429).send('Bartender is busy');
  }
});

app.get('/', function(req, res) {
  res.json(orderHistory);
});

app.listen(PORT, () => {
  console.log(`Listenening on port ${PORT}`)
});