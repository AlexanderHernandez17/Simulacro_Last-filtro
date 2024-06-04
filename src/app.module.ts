import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { AuthorModule } from "./author/author.module";
import { BookModule } from "./book/book.module";
import { SaleModule } from "./sale/sale.module";
import { ClientModule } from "./client/client.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SeedsModule } from "./seeds/seeds.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      "ssl": true
    }),
    AuthorModule, BookModule, SaleModule, ClientModule, SeedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
