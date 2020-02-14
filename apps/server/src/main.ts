import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

import * as compression from 'compression';
import * as path from 'path';
import 'reflect-metadata';
require('dotenv').config();

// const pathToEnv = path.join(__dirname, '..env');

async function bootstrap() {
  const instance = await NestFactory.create(AppModule);
  instance.use(compression());

  await instance.listen(8080);
}
bootstrap()
  .then(() => {
    console.log(`Application listening on port ${ process.env.PORT }!`);
  })
  .catch(error => {
    console.error('Application bootstrap error!', error)
  });
