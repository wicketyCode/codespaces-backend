import express, { Request, Response } from 'express';
import products from "../products/products";

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json(products);
});

export default router;