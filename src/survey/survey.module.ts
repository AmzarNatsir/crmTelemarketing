import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SurveyController } from './survey.controller';
import { UmumService } from './umum/umum.service';
import { ProspekPetaniService } from './prospek-petani/prospek-petani.service';
import { PelangganStiService } from './pelanggan-sti/pelanggan-sti.service';
import { TokoPengecerService } from './toko-pengecer/toko-pengecer.service';
import { MitraPengepulService } from './mitra-pengepul/mitra-pengepul.service';
import { PoktanService } from './poktan/poktan.service';
import { PenyelesaianMasalahService } from './penyelesaian-masalah/penyelesaian-masalah.service';
import { StatistikService } from './statistik/statistik.service';
import { PenutupService } from './penutup/penutup.service';

@Module({
  controllers: [SurveyController],
  providers: [UmumService, ProspekPetaniService, PrismaService, PelangganStiService, TokoPengecerService, MitraPengepulService, PoktanService, PenyelesaianMasalahService, StatistikService, PenutupService],
})
export class SurveyModule {}
