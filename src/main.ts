import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { AtGuard } from './authentication/guards/authenticaoin.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const reflector = new Reflector();
  app.useGlobalGuards(new AtGuard(reflector));
  await app.listen(3000);
}
bootstrap();
