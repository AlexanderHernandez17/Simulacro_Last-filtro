import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from 'src/author/entities/author.entity';
import { Book } from 'src/book/entities/book.entity';
import { Client } from 'src/client/entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async seed() {
    await this.createAuthors();
    await this.createBooks();
    await this.createClients();
    // Agrega más métodos de creación si es necesario
  }

  async createAuthors() {
    const authors = [
      { name: 'Author One' },
      { name: 'Author Two' },
      // Agrega más autores según sea necesario
    ];

    for (const author of authors) {
      await this.authorRepository.save(author);
    }
  }

  async createBooks() {
    const books = [
      { title: 'Book One', description: 'Description One', authors: [1, 2] },
      { title: 'Book Two', description: 'Description Two', authors: [1] },
      // Agrega más libros según sea necesario
    ];

    for (const book of books) {
      const authors = await this.authorRepository.findByIds(book.authors);
      await this.bookRepository.save({ ...book, authors });
    }
  }

  async createClients() {
    const clients = [
      { name: 'Client One', email: 'client1@example.com' },
      { name: 'Client Two', email: 'client2@example.com' },
      // Agrega más clientes según sea necesario
    ];

    for (const client of clients) {
      await this.clientRepository.save(client);
    }
  }
}

