import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });

  const config: Omit<OpenAPIObject, any> = new DocumentBuilder()
    .setTitle('TecWeb 2024-2')
    .setDescription('Secomp Presença - Descrição da API')
    .setVersion('1.0')
    .addTag('TecWeb')
    .build();

  const documentFactory: () => OpenAPIObject = (): OpenAPIObject =>
    SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.use(
    session({
      name: 'tecwebsession',
      secret: 'tecwebSecret',
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false, maxAge: 240000 },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.enableCors({
    origin: 'http://localhost:4200/',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
