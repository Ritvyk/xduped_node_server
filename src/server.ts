import Express from 'express';
import { configDotenv } from 'dotenv';
import path from 'path';
import { error } from 'console';

const configLoaded = configDotenv({
  path: path.join('src', 'env', '.dev.env'),
});

if (configLoaded?.error) {
  throw error("Configuration file hasn't loaded successfully.");
}

const app: Express.Application = Express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3030;

app.get('/', (req: Express.Request, res: Express.Response) => {
  res.send('Hello Worldssxs');
});

app.listen(port, () => {
  console.log(`Server started at port : http://localhost:${port}/`);
});
