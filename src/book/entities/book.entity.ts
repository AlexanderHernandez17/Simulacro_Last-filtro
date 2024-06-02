import { Author } from 'src/author/entities/author.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToMany(() => Author, (author) => author.books)
  @JoinTable()
  authors: Author[];
}
