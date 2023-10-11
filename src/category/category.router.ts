import express, { Router, Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import * as catagoryService from './category.service';

const router: Router = express.Router();
router.use(bodyParser.text());

router
  .route('/')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.query);
      const categories = await catagoryService.getAll();
      res.json(categories);
    } catch (err) {
      next(err);
    }
  });

export default router;
