import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const config = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  LOG_LVL: process.env.LOG_LVL,
};

export const { PORT, LOG_LVL } = process.env;
