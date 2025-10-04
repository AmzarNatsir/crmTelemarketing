import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SurveyController } from './survey.controller';
import { UmumService } from './umum/umum.service';
import { ProspekPetaniService } from './prospek-petani/prospek-petani.service';

@Module({
  controllers: [SurveyController],
  providers: [UmumService, ProspekPetaniService, PrismaService],
})
export class SurveyModule {}
