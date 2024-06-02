import { Sale } from 'src/sale/entities/sale.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Sale, (sale) => sale.client)
  sales: Sale[];
}
