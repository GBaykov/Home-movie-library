import express, {
  Request,
  Response,
  Application,
  NextFunction,
  Express,
} from 'express';
import categoryRouter from './resources/category/category.router';
import filmRouter from './resources/film/film.router';

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

app.use('/category', categoryRouter);
app.use('/movies', filmRouter);
