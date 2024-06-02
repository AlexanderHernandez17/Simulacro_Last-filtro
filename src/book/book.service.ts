import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book = this.bookRepository.create(createBookDto);
    return this.bookRepository.save(book);
  }

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async findOne(id: string): Promise<Book> {
    return this.bookRepository.findOne({ where: { id } });
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    await this.bookRepository.update(id, updateBookDto);
    return this.bookRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.bookRepository.delete(id);
  }
}