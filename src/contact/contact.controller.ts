import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
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
  findAll() {
    return this.contactService.findAll();
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
