import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PoktanDto } from './dto/poktan.dto/poktan.dto';

@Injectable()
export class PoktanService {
    constructor(private prisma: PrismaService) {}

    async create(data: PoktanDto) {
        try {
            return this.prisma.surveyKetuaPoktan.create({ data });
        } catch (error) {
            console.error('Error Survey Poktan:', error);
            throw error;
        }
    }
    findAll() {
        return this.prisma.surveyKetuaPoktan.findMany({
            include: {
                survey: true,
            },
        });
    }
    findOne(id: bigint) {
        return this.prisma.surveyKetuaPoktan.findUnique({
            where: { id },
            include: {
                survey: true,
            },
        });
    }
    update(id: bigint, data: PoktanDto) {
        return this.prisma.surveyKetuaPoktan.update({
            where: { id },
            data,
        });
    }
    remove(id: bigint) {
        return this.prisma.surveyKetuaPoktan.delete({
            where: { id },
        });
    }
}
