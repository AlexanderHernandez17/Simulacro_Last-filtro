// src/seeds/seeds.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from '../author/entities/author.entity';
import { Book } from '../book/entities/book.entity';
import { Client } from '../client/entities/client.entity';
import { Sale } from '../sale/entities/sale.entity';
import { SeedService } from './seeds.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Author, Book, Client, Sale]),
  ],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedsModule {}

