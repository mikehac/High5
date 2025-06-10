/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as dotenv from 'dotenv';
import { appExceptionsFilter } from './customFilter/appExceptionsFilter';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.enableCors({
    origin: ['http://localhost:4200'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });
  app.useGlobalFilters(new appExceptionsFilter());

  const port = process.env.PORT || 3000;
  console.log(port);
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
