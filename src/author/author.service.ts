import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = this.authorRepository.create(createAuthorDto);
    return this.authorRepository.save(author);
  }

  findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  async findOne(id: string): Promise<Author> {
    const author = await this.authorRepository.findOne({ where: { id } });
    if (!author) {
      throw new NotFoundException(`Author with id ${id} not found`);
    }
    return author;
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    await this.authorRepository.update(id, updateAuthorDto);
    const updatedAuthor = await this.authorRepository.findOne({ where: { id } });
    if (!updatedAuthor) {
      throw new NotFoundException(`Author with id ${id} not found`);
    }
    return updatedAuthor;
  }

  async remove(id: string): Promise<void> {
    const result = await this.authorRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Author with id ${id} not found`);
    }
  }
}
