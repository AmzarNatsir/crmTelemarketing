import { Injectable } from '@nestjs/common';
import { PelangganStiDto } from './dto/pelanggan-sti.dto/pelanggan-sti.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PelangganStiService {
    constructor(private prisma: PrismaService) {}

    async create(data: PelangganStiDto) {
        try {
            return this.prisma.surveyPelangganSti.create({ data });
        } catch (error) {
            console.error('Error Survey Pelanggan STI:', error);
            throw error;
        }
    }

    findAll() {
        return this.prisma.surveyPelangganSti.findMany({
            include: {
                survey: true,
            },
        });
    }

    findOne(id: bigint) {
        return this.prisma.surveyPelangganSti.findUnique({
            where: { id },
            include: {
                survey: true,
            },
        });
    }

    update(id: bigint, data: PelangganStiDto) {
        return this.prisma.surveyPelangganSti.update({
            where: { id },
            data,
        });
    }

    remove(id: bigint) {
        return this.prisma.surveyPelangganSti.delete({
            where: { id },
        });
    }
    
}