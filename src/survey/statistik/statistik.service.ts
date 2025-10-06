import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { StatistikDto, UpdateStatistikDto } from './dto/statistik.dto/statistik.dto';

@Injectable()
export class StatistikService {
    constructor(private prisma: PrismaService) {}

    async create(data: StatistikDto) {
        try {
            return this.prisma.surveyStatistikKonteksPertanian.create({ data });
        } catch (error) {
            console.error('Error Survey Statistik:', error);
            throw error;
        }
    }

    findAll() {
        return this.prisma.surveyStatistikKonteksPertanian.findMany({
            include: {
                survey: true,
            },
        });
    }

    findOne(id: bigint) {
        return this.prisma.surveyStatistikKonteksPertanian.findUnique({
            where: { id },
            include: {
                survey: true,
            },
        });
    }

    update(id: bigint, data: UpdateStatistikDto) {
        return this.prisma.surveyStatistikKonteksPertanian.update({
            where: { id },
            data,
        });
    }

    remove(id: bigint) {
        return this.prisma.surveyStatistikKonteksPertanian.delete({
            where: { id },
        });
    }
    

}
