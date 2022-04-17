import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setViewEngine('hbs');

  // 自动解析请求参数
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
