import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePenutupDto } from './dto/penutup.dto/penutup.dto';

@Injectable()
export class PenutupService {
    constructor(private prisma: PrismaService) {}
    
    async create(data: UpdatePenutupDto) {
        try {
            return this.prisma.surveyPenutupRingkasan.create({ data });
        } catch (error) {
            console.error('Error Survey Penutup:', error);
            throw error;
        }
    }

    findAll() {
        return this.prisma.surveyPenutupRingkasan.findMany({
            include: {
                survey: true,
            },
        });
    }

    findOne(id: bigint) {
        return this.prisma.surveyPenutupRingkasan.findUnique({
            where: { id },
            include: {
                survey: true,
            },
        });
    }   

    update(id: bigint, data: UpdatePenutupDto) {
        return this.prisma.surveyPenutupRingkasan.update({
            where: { id },
            data,
        });
    }

    remove(id: bigint) {
        return this.prisma.surveyPenutupRingkasan.delete({
            where: { id },
        });
    }
    
}
