import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto, UpdateContactDto } from './dto/contact.dto';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}
  // CREATE
  @Post()
  create(@Body() data: CreateContactDto) {
    return this.contactService.create(data);
  }

  // FIND ALL
  @Get()
  findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10'
  ) {
    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 10;
    return this.contactService.findAll(pageNum, limitNum);
  }

  // FIND ONE
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(BigInt(id));
  }

  // UPDATE
  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateContactDto) {
    return this.contactService.update(BigInt(id), data);
  }

  // DELETE
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(BigInt(id));
  }
}
