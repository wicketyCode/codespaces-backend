import express, { Request, Response } from 'express';
import proxy from './proxy';
import products from "./products/Products";
import productDetails from "./productDetails/ProductDetails";

const app = express();
app.use(express.json());

app.get('/products', (req: Request, res: Response) => {
  res.json(products);
});

app.get('/products/details/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const product = productDetails.find(product => product.id === parseInt(id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});

proxy(app);
