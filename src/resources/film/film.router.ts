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
      const query = JSON.stringify(req.query);
      const films = await filmService.getAll(query);
      if (!films) throw new Error('NOO films');
      res.json(films);
    } catch (err) {
      next(err);
    }
  });

router
  .route('/:movieId')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { movieId } = req.params;
      const film = await filmService.getFilm(movieId);
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

  .put('/:movieId', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { movieId } = req.params;
      const film: FilmType = await filmService.updateFilm(movieId, req.body);
      if (!film || !movieId) throw new Error('NOO film or id');
      res.status(200).json(film);
    } catch (err) {
      next(err);
    }
  })

  .delete(
    '/:movieId',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { movieId } = req.params;
        if (!movieId) throw new Error('NOO movieId');
        const result: number = await filmService.deleteFilm(movieId);
        res.status(200).json(result);
      } catch (err) {
        next(err);
      }
    },
  );

export default router;
