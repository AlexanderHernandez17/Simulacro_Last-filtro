import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Sale')
@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @ApiOperation({ summary: 'Create sale' })
  @ApiCreatedResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.create(createSaleDto);
  }

  @ApiOperation({ summary: 'Get all sales' })
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  @Get()
  findAll() {
    return this.saleService.findAll();
  }

  @ApiOperation({ summary: 'Get sale by id' })
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  @ApiParam({ name: 'id', description: 'uuid book' })
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.saleService.findOne(id);
  }

  @ApiOperation({ summary: 'Update sale by id' })
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  @ApiParam({ name: 'id', description: 'uuid book' })
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.saleService.update(id, updateSaleDto);
  }

  @ApiOperation({ summary: 'Delete sale by id' })
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  @ApiParam({ name: 'id', description: 'uuid book' })
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.saleService.remove(id);
  }
}
