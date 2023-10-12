import express, { Router, Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import * as filmService from './film.service';
import { FilmType } from '../../types';

const router: Router = express.Router();
router.use(bodyParser.text());

router
  .route('/')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const films = await filmService.getAll();
      if (!films) throw new Error('NOO categories');
      res.json(films);
    } catch (err) {
      next(err);
    }
  });

router
  .route('/:id')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const film = await filmService.getFilm(id);
      if (!film) throw new Error('NOO Film');
      res.json(film);
    } catch (err) {
      next(err);
    }
  });

router
  .post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const film: FilmType = await filmService.addFilm(req.body);
      if (!film) throw new Error('NOO film ');
      res.status(201).json(film);
    } catch (err) {
      next(err);
    }
  })

  .put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const film: FilmType = await filmService.updateFilm(id, req.body);
      if (!film || !id) throw new Error('NOO film or id');
      res.status(200).json(film);
    } catch (err) {
      next(err);
    }
  })

  .delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (!id) throw new Error('NOO id');
      const result: number = await filmService.deleteFilm(id);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  });

export default router;
