import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('api')
    .setDescription('some random api')
    .setVersion('1.0.0')
    .addTag('some app')
    .addBearerAuth(
      {
        description: 'This',
        name: 'Authorization',
        type: 'http',
        scheme: 'Bearer',
        bearerFormat: 'Bearer',
        in: 'Header',
      },
      'token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
