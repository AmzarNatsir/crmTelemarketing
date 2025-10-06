import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MitraPengepulDto } from './dto/mitra-pengepul.dto/mitra-pengepul.dto';

@Injectable()
export class MitraPengepulService {
    constructor(private prisma: PrismaService) {}

    async create(data: MitraPengepulDto) {
        try {
            return this.prisma.surveyMitraPengepul.create({ data });
        } catch (error) {
            console.error('Error Survey Mitra Pengepul:', error);
            throw error;
        }
    }

    findAll() {
        return this.prisma.surveyMitraPengepul.findMany({
            include: {
                survey: true,
            },
        });
    }

    findOne(id: bigint) {
        return this.prisma.surveyMitraPengepul.findUnique({
            where: { id },
            include: {
                survey: true,
            },
        });
    }

    update(id: bigint, data: MitraPengepulDto) {
        return this.prisma.surveyMitraPengepul.update({
            where: { id },
            data,
        });
    }

    remove(id: bigint) {
        return this.prisma.surveyMitraPengepul.delete({
            where: { id },
        });
    }

}
