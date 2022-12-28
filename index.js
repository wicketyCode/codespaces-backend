const fs = require('fs/promises');
const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const {v4: uuid} = require('uuid');



const app = express();

const products = [
    {
      id: 1,
      name: 'T-shirt',
      price: 25,
      description: 'A comfortable cotton t-shirt'
    },
    {
      id: 2,
      name: 'Jeans',
      price: 50,
      description: 'A classic pair of jeans'
    },
    {
      id: 3,
      name: 'Dress',
      price: 75,
      description: 'A stylish dress for any occasion'
    }
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/products', (req, res) => {
    res.json(products);
});


app.listen(4000, () => {
    console.log('Server listening on port 4000');
});