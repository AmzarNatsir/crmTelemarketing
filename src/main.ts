import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // aktifkan validasi otomatis untuk DTO
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // ✅ Fix BigInt serialization issue (important for Prisma)
  (BigInt.prototype as any).toJSON = function () {
    return this.toString();
  };
  
  // swagger config
  const config = new DocumentBuilder()
    .setTitle('Auth API')
    .setDescription('API dokumentasi untuk modul login')
    .setVersion('1.0')
    .addBearerAuth() // supaya bisa input token di Swagger
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
