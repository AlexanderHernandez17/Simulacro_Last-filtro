import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';


@ApiTags('Author')
@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}


  @ApiOperation({ summary: 'Create author' })
  @ApiCreatedResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @ApiOperation({ summary: 'Get all authors' })
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @ApiOperation({ summary: 'Get author by id' })
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  @ApiParam({ name: 'id', description: 'uuid book' })
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.authorService.findOne(id);
  }

  @ApiOperation({ summary: 'Update author by id' })
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  @ApiParam({ name: 'id', description: 'uuid book' })
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.update(id, updateAuthorDto);
  }

  @ApiOperation({ summary: 'Delete author by id' })
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  @ApiParam({ name: 'id', description: 'uuid book' })
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.authorService.remove(id);
  }
}
