import express, { Request, Response } from 'express';
import proxy from './proxy';

const app = express();
app.use(express.json());

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
