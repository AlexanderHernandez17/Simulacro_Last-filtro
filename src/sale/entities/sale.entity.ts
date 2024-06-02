import { Book } from 'src/book/entities/book.entity';
import { Client } from 'src/client/entities/client.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';


@Entity()
export class Sale {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Book)
  book: Book;

  @ManyToOne(() => Client, (client) => client.sales)
  client: Client;

  @Column()
  saleDate: Date;
}
