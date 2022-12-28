import express from 'express';
import proxy from './proxy';
import products from './routes/products';
import productDetails from './routes/productDetails';

const app = express();

app.use(express.json());
app.use('/products', products);
app.use('/products/details', productDetails);

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});

proxy(app);