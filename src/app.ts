import express, { Request, Response, Application, NextFunction } from 'express';
import categoryRouter from './resources/category/category.router';
import filmRouter from './resources/film/film.router';
import { handleErrors, loggingErrors } from './logger/errorHandler';
import { logging } from './logger/logger';

const app: Application = express();
export default app;
app.use(express.json());

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send(`Service is running!`);
    return;
  }
  next();
});

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  logging(req, res, next);
  next();
});

app.use('/category', categoryRouter);
app.use('/movies', filmRouter);

app.use(handleErrors);

process.on('uncaughtException', (err) => {
  loggingErrors(err);
  setTimeout(() => process.exit(1), 1000);
});

process.on('unhandledRejection', (err: Error) => {
  loggingErrors(err);
  setTimeout(() => process.exit(1), 1000);
});
