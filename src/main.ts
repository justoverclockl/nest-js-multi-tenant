import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from '@fastify/helmet';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
  );
  app.get(ConfigService);
  app.enableCors({
    origin: ['http://localhost:9000'],
    methods: 'GET,POST,PUT,PATCH,DELETE',
  });

  await app.register(helmet);
  await app.listen('server.port');
}

bootstrap();
