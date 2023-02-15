import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 引导 bootstrap
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
