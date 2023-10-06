import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//bootstrap creates the app
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
