import { Controller, Get, Post, Body, Param, Put, Delete, BadRequestException } from '@nestjs/common';
import { UmumService } from './umum/umum.service';
import { ProspekPetaniService } from './prospek-petani/prospek-petani.service';
import { PelangganStiService } from './pelanggan-sti/pelanggan-sti.service';
import { TokoPengecerService } from './toko-pengecer/toko-pengecer.service';
import { MitraPengepulService } from './mitra-pengepul/mitra-pengepul.service';
import { PenyelesaianMasalahService } from './penyelesaian-masalah/penyelesaian-masalah.service';
import { PoktanService } from './poktan/poktan.service';
import { StatistikService } from './statistik/statistik.service';
import { PenutupService } from './penutup/penutup.service';
import { CreateSurveyUmumDto, UpdateSurveyUmumDto } from './umum/dto/umum.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateProspekPetaniDto, UpdateProspekPetaniDto } from './prospek-petani/dto/prospek-petani.dto';
import { PelangganStiDto, UpdatePelangganStiDto } from './pelanggan-sti/dto/pelanggan-sti.dto/pelanggan-sti.dto';
import { TokoPengecerDto, UpdateTokoPengecerDto } from './toko-pengecer/dto/toko-pengecer.dto/toko-pengecer.dto';
import { MitraPengepulDto, UpdateMitraPengepulDto } from './mitra-pengepul/dto/mitra-pengepul.dto/mitra-pengepul.dto';
import { PoktanDto, UpdatePoktanDto } from './poktan/dto/poktan.dto/poktan.dto';
import { PenyelesaianMasalahDto, UpdatePenyelesaianMasalahDto } from './penyelesaian-masalah/dto/penyelesaian-masalah.dto/penyelesaian-masalah.dto';
import { StatistikDto, UpdateStatistikDto } from './statistik/dto/statistik.dto/statistik.dto';
import { PenutupDto, UpdatePenutupDto } from './penutup/dto/penutup.dto/penutup.dto';

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
    private readonly prospekPetaniService: ProspekPetaniService,
    private readonly pelangganStiService: PelangganStiService,
    private readonly tokoPengecerService: TokoPengecerService,
    private readonly mitraPengepulService: MitraPengepulService,
    private readonly poktanService: PoktanService,
    private readonly penyelesaianMasalahService: PenyelesaianMasalahService,
    private readonly statistikService: StatistikService,
    private readonly penutupService: PenutupService
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

  //Pelanggan STI
  @Post('pelanggan-sti')
  createPelangganSti(@Body() data: PelangganStiDto) {
    return this.pelangganStiService.create(data);
  }

  // FIND ALL
  @Get('pelanggan-sti')
  findAllPelangganSti() {
    return this.pelangganStiService.findAll();
  }

  // FIND ONE
  @Get('pelanggan-sti/:id')
  findOnePelangganSti(@Param('id') id: string) {
    return this.pelangganStiService.findOne(BigInt(id));
  }
  // UPDATE
  @Put('pelanggan-sti/:id')
  updatePelangganSti(@Param('id') id: string, @Body() data: UpdatePelangganStiDto) {
    return this.pelangganStiService.update(BigInt(id), data);
  }

  // DELETE
  @Delete('pelanggan-sti/:id')
  removePelangganSti(@Param('id') id: string) {
    return this.pelangganStiService.remove(BigInt(id));
  }

  // ==================================================== TODO: Toko Pengecer ====================================================
  @Post('toko-pengecer')
  createTokoPengecer(@Body() data: TokoPengecerDto) {
    return this.tokoPengecerService.create(data);
  }
  // FIND ALL
  @Get('toko-pengecer')
  findAllTokoPengecer() {
    return this.tokoPengecerService.findAll();
  }
  // FIND ONE
  @Get('toko-pengecer/:id')
  findOneTokoPengecer(@Param('id') id: string) {
    return this.tokoPengecerService.findOne(BigInt(id));
  }
  // UPDATE
  @Put('toko-pengecer/:id')
  updateTokoPengecer(@Param('id') id: string, @Body() data: UpdateTokoPengecerDto) {
    return this.tokoPengecerService.update(BigInt(id), data);
  }
  // DELETE
  @Delete('toko-pengecer/:id')
  removeTokoPengecer(@Param('id') id: string) {
    return this.tokoPengecerService.remove(BigInt(id));
  }

  // Mitra Pengepul
  @Post('mitra-pengepul')
  createMitraPengepul(@Body() data: MitraPengepulDto) {
    return this.mitraPengepulService.create(data);
  }
  // FIND ALL
  @Get('mitra-pengepul')
  findAllMitraPengepul() {
    return this.mitraPengepulService.findAll();
  }
  // FIND ONE
  @Get('mitra-pengepul/:id')
  findOneMitraPengepul(@Param('id') id: string) {
    return this.mitraPengepulService.findOne(BigInt(id));
  }
  // UPDATE
  @Put('mitra-pengepul/:id')
  updateMitraPengepul(@Param('id') id: string, @Body() data: UpdateMitraPengepulDto) {
    return this.mitraPengepulService.update(BigInt(id), data);
  }
  // DELETE
  @Delete('mitra-pengepul/:id')
  removeMitraPengepul(@Param('id') id: string) {
    return this.mitraPengepulService.remove(BigInt(id));
  }

  // Ketua Poktan
  @Post('poktan')
  createKetuaPoktan(@Body() data: PoktanDto) {
    return this.poktanService.create(data);
  }
  // FIND ALL
  @Get('poktan')
  findAllKetuaPoktan() {
    return this.poktanService.findAll();
  }
  // FIND ONE
  @Get('poktan/:id')
  findOneKetuaPoktan(@Param('id') id: string) {
    return this.poktanService.findOne(BigInt(id));
  }
  // UPDATE
  @Put('poktan/:id')
  updateKetuaPoktan(@Param('id') id: string, @Body() data: UpdatePoktanDto) {
    return this.poktanService.update(BigInt(id), data);
  }
  // DELETE
  @Delete('poktan/:id')
  removeKetuaPoktan(@Param('id') id: string) {
    return this.poktanService.remove(BigInt(id));
  }

  //penyelesaian masalah
  @Post('penyelesaian-masalah')
  createPenyelesaianMasalah(@Body() data: PenyelesaianMasalahDto) {
    return this.penyelesaianMasalahService.create(data);
  }
  // FIND ALL
  @Get('penyelesaian-masalah')
  findAllPenyelesaianMasalah() {
    return this.penyelesaianMasalahService.findAll();
  }
  // FIND ONE
  @Get('penyelesaian-masalah/:id')
  findOnePenyelesaianMasalah(@Param('id') id: string) {
    return this.penyelesaianMasalahService.findOne(BigInt(id));
  }
  // UPDATE
  @Put('penyelesaian-masalah/:id')
  updatePenyelesaianMasalah(@Param('id') id: string, @Body() data: UpdatePenyelesaianMasalahDto) {
    return this.penyelesaianMasalahService.update(BigInt(id), data);
  }
  // DELETE
  @Delete('penyelesaian-masalah/:id')
  removePenyelesaianMasalah(@Param('id') id: string) {
    return this.penyelesaianMasalahService.remove(BigInt(id));
  }

  //statisik konteks pertanian
  @Post('statistik-pertanian')
  createStatistik(@Body() data: StatistikDto) {
    return this.statistikService.create(data);
  }
  // FIND ALL
  @Get('statistik-pertanian')
  findAllStatistik() {
    return this.statistikService.findAll();
  }
  // FIND ONE
  @Get('statistik-pertanian/:id')
  findOneStatistik(@Param('id') id: string) {
    return this.statistikService.findOne(BigInt(id));
  }
  // UPDATE
  @Put('statistik-pertanian/:id')
  updateStatistik(@Param('id') id: string, @Body() data: UpdateStatistikDto) {
    return this.statistikService.update(BigInt(id), data);
  }
  // DELETE
  @Delete('statistik-pertanian/:id')
  removeStatistik(@Param('id') id: string) {
    return this.statistikService.remove(BigInt(id));
  }

  // PENUTUP
  @Post('penutup')
  createPenutup(@Body() data: PenutupDto) {
    return this.penutupService.create(data);
  }
  // FIND ALL
  @Get('penutup')
  findAllPenutup() {
    return this.penutupService.findAll();
  }
  // FIND ONE
  @Get('penutup/:id')
  findOnePenutup(@Param('id') id: string) {
    return this.penutupService.findOne(BigInt(id));
  }
  // UPDATE
  @Put('penutup/:id')
  updatePenutup(@Param('id') id: string, @Body() data: UpdatePenutupDto) {
    return this.penutupService.update(BigInt(id), data);
  }
  // DELETE
  @Delete('penutup/:id')
  removePenutup(@Param('id') id: string) {
    return this.penutupService.remove(BigInt(id));
  }

}
