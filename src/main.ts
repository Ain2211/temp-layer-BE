import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { APIPrefix } from '@constant/common';
import * as helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { ResponseTransformInterceptor } from 'src/shares/interceptors/response.interceptor';
import { BodyValidationPipe } from 'src/shares/pipes/body.validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  app.useGlobalPipes(new BodyValidationPipe());
  app.useGlobalInterceptors(new ResponseTransformInterceptor());
  app.setGlobalPrefix(APIPrefix.Version);
  const port = parseInt(process.env.SERVER_PORT);

  const appName = 'Rebalancer backend';
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(appName)
    .setDescription(appName)
    .setVersion('3.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: appName,
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      displayRequestDuration: true,
    },
  });

  app.use(helmet());

  await app.listen(port);
  const logger = app.get(Logger);
  logger.setContext('NestApplication');
  logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
