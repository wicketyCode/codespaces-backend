import express, { Request, Response } from 'express';
import productDetails from "../productDetails/productDetails";

const router = express.Router();

router.get('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const product = productDetails.find(product => product.id === parseInt(id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

export default router;