import express, { Request, Response } from 'express';
import proxy from './proxy';
import products from "./products/products";

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/products', (req: Request, res: Response) => {
  res.json(products);
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});

proxy(app);
