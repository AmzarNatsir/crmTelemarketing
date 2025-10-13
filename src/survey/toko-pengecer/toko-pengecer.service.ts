import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokoPengecerDto } from './dto/toko-pengecer.dto/toko-pengecer.dto';

@Injectable()
export class TokoPengecerService {
    constructor(private prisma: PrismaService) {}

    async create(data: TokoPengecerDto) {
        try {
            return this.prisma.surveyTokoPengecer.create({ data });
        } catch (error) {
            console.error('Error Survey Toko Pengecer:', error);
            throw error;
        }
    }

    findAll() {
        return this.prisma.surveyTokoPengecer.findMany({
            include: {
                survey: true,
            },
        });
    }

    findOne(id: bigint) {
        return this.prisma.surveyTokoPengecer.findUnique({
            where: { id },
            include: {
                survey: true,
            },
        });
    }

    update(id: bigint, data: TokoPengecerDto) {
        return this.prisma.surveyTokoPengecer.update({
            where: { id },
            data,
        });
    }

    remove(id: bigint) {
        return this.prisma.surveyTokoPengecer.delete({
            where: { id },
        });
    }

}
