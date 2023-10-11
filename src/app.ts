import express, {
  Request,
  Response,
  Application,
  NextFunction,
  Express,
} from 'express';
import categoryRouter from './category/category.router';

const app: Application = express();
export default app;

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send(`Service is running!`);
    return;
  }
  next();
});

app.use('/category', categoryRouter);
