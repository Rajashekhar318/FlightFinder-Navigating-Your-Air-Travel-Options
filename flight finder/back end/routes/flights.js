const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const flights = [
    { id: 1, from: 'New York', to: 'London', price: '$500' },
    { id: 2, from: 'Paris', to: 'Tokyo', price: '$750' },
    { id: 3, from: 'Delhi', to: 'Dubai', price: '$300' }
  ];
  res.json(flights);
});

module.exports = router;
