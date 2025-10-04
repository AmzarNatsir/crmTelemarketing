import { Controller, Get, Post, Body, Param, Put, Delete, BadRequestException } from '@nestjs/common';
import { UmumService } from './umum/umum.service';
import { ProspekPetaniService } from './prospek-petani/prospek-petani.service';
import { CreateSurveyUmumDto, UpdateSurveyUmumDto } from './umum/dto/umum.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateProspekPetaniDto, UpdateProspekPetaniDto } from './prospek-petani/dto/prospek-petani.dto';

// ✅ Pipe lokal untuk parsing BigInt ID
function parseBigIntParam(value: string): bigint {
  try {
    return BigInt(value);
  } catch {
    throw new BadRequestException(`Invalid BigInt ID: ${value}`);
  }
}

@ApiTags('Surveys')
@Controller('surveys')
export class SurveyController {
  constructor(
    private readonly umumService: UmumService,
    private readonly prospekPetaniService: ProspekPetaniService
  ) {}

  // === SURVEY UMUM ===
  // CREATE
  @Post('umum')
  createUmum(@Body() data: CreateSurveyUmumDto) {
    return this.umumService.create(data);
  }

  // FIND ALL
  @Get('umum')
  findAllUmum() {
    return this.umumService.findAll();
  }

  // FIND ONE
  @Get('umum/:id')
  findOneUmum(@Param('id') id: string) {
    return this.umumService.findOne(BigInt(id));
  }

  // UPDATE
  @Put('umum/:id')
  updateUmum(@Param('id') id: string, @Body() data: UpdateSurveyUmumDto) {
    return this.umumService.update(BigInt(id), data);
  }

  // DELETE
  @Delete('umum/:id')
  removeUmum(@Param('id') id: string) {
    return this.umumService.remove(BigInt(id));
  }

  // ========== (OPTIONAL) SURVEY PETANI SECTION ==========
  @Post('prospek-petani')
  createProspekPetani(@Body() data: CreateProspekPetaniDto) {
    return this.prospekPetaniService.create(data);
  }

  // FIND ALL
  @Get('prospek-petani')
  findAllProspekPetani() {
    return this.prospekPetaniService.findAll();
  }

  // FIND ONE
  @Get('prospek-petani/:id')
  findOneProspekPetani(@Param('id') id: string) {
    return this.prospekPetaniService.findOne(BigInt(id));
  }

  // UPDATE
  @Put('prospek-petani/:id')
  updateProspekPetani(@Param('id') id: string, @Body() data: UpdateProspekPetaniDto) {
    return this.prospekPetaniService.update(BigInt(id), data);
  }

  // DELETE
  @Delete('prospek-petani/:id')
  removeProspekPetani(@Param('id') id: string) {
    return this.prospekPetaniService.remove(BigInt(id));
  }

  

}
