import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from './common/logger/logger.service';
import { setupSwagger } from './config/swagger.config';
import { stringToBool } from './common/utils/stringToBool.utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  const configService = app.get<ConfigService>(ConfigService);

  if (stringToBool(configService.get('SWAGGER_ENABLED'))) {
    setupSwagger(app);
  }

  // app.useGlobalPipes(new ValidationPipe());
  // }
  //   app.use(cookieParser());

  app.useLogger(app.get(Logger));

  const port = configService.get<number>('PORT');
  await app.listen(port ?? 3000);
}
bootstrap();
