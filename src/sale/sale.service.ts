import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Sale } from './entities/sale.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>,
  ) {}
  create(createSaleDto: CreateSaleDto) : Promise<Sale>{
    const sale = this.saleRepository.create(createSaleDto);
    return this.saleRepository.save(sale);
  }

  async findAll(): Promise<Sale[]> {
    return this.saleRepository.find();
  }

  async findOne(id: string): Promise<Sale> {
    const sale= this.saleRepository.findOne({ where: { id } });
    if (!sale) {
      throw new NotFoundException(`Author with id ${id} not found`);
    }
    return sale;
  }

  async update(id: string, updateSaleDto: UpdateSaleDto): Promise<Sale> {
    await this.saleRepository.update(id, updateSaleDto);
    const updatedSale = await this.saleRepository.findOne({ where: { id } });
    if (!updatedSale) {
      throw new NotFoundException(`Author with id ${id} not found`);
    }
    return updatedSale;
  }

  async remove(id: string): Promise<void> {
    const result = await this.saleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Author with id ${id} not found`);
    }
  }
}
