import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.time();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.timeEnd();
}
bootstrap();
