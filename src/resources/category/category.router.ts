import express, { Router, Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import * as catagoryService from './category.service';
import { OwnCategory } from '../../types';

const router: Router = express.Router();
router.use(bodyParser.text());

router
  .route('/')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categories = await catagoryService.getAll();
      if (!categories) throw new Error('NOO categories');
      res.json(categories);
    } catch (err) {
      next(err);
    }
  });

router
  .route('/:id')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const category = await catagoryService.getCategory(id);
      if (!category) throw new Error('NOO category');
      res.json(category);
    } catch (err) {
      next(err);
    }
  });

router
  .post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category: OwnCategory | string = await catagoryService.addCategory(
        req.body,
      );
      if (!category) throw new Error('NOO category ');
      res.status(201).json(category);
    } catch (err) {
      next(err);
    }
  })

  .put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const category: OwnCategory | string =
        await catagoryService.updateCategory(id, req.body);
      if (!category || !id) throw new Error('NOO category or id');
      res.status(200).json(category);
    } catch (err) {
      next(err);
    }
  })

  .delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (!id) throw new Error('NOO id');
      const result: number = await catagoryService.deleteCategory(id);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  });

export default router;
