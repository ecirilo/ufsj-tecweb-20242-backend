import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

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

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
