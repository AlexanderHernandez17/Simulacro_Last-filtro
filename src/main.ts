import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SeedService } from './seeds/seeds/seeds.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Librería Digital Siglo Van Rossum')
  .setDescription('venta y gestión de libros electrónicos')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const seedService = app.get(SeedService);
  await seedService.seed();
  
  await app.listen(3000);
  console.log('App listening at localhost:3000');
  
}
bootstrap();
