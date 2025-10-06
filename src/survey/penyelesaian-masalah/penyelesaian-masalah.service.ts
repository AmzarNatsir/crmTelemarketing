import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePenyelesaianMasalahDto } from './dto/penyelesaian-masalah.dto/penyelesaian-masalah.dto';

@Injectable()
export class PenyelesaianMasalahService {
    constructor(private prisma: PrismaService) {}

    async create(data: UpdatePenyelesaianMasalahDto) {
        try {
            return this.prisma.surveyPenyelesaianMasalah.create({ data });
        } catch (error) {
            console.error('Error Survey Penyelesaian Masalah:', error);
            throw error;
        }
    }

    findAll() {
        return this.prisma.surveyPenyelesaianMasalah.findMany({
            include: {
                survey: true,
            },
        });
    }

    findOne(id: bigint) {
        return this.prisma.surveyPenyelesaianMasalah.findUnique({
            where: { id },
            include: {
                survey: true,
            },
        });
    }

    update(id: bigint, data: UpdatePenyelesaianMasalahDto) {
        return this.prisma.surveyPenyelesaianMasalah.update({
            where: { id },
            data,
        });
    }

    remove(id: bigint) {
        return this.prisma.surveyPenyelesaianMasalah.delete({
            where: { id },
        });
    }

}
