import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateSurveyUmumDto, UpdateSurveyUmumDto } from "./dto/umum.dto";
// import { Prisma } from "generated/prisma";

@Injectable()
export class UmumService {
    constructor(private prisma: PrismaService) {}  

    async create(data: CreateSurveyUmumDto) {
        try {
            return this.prisma.surveyBagianUmum.create({ 
                data, 
                include: {
                    contact: true,
                },
            });
        } catch (error) {
            console.error('Error create contact:', error);
            throw error;
        }
        
    }
    

    // FIND ALL (include surveys)
    findAll() {
        return this.prisma.surveyBagianUmum.findMany({
        include: {
            contact: true,
            prospekPetani: true,
            pelangganSti: true,
            tokoPengecer: true,
            mitraPengepul: true,
            ketuaPoktan: true,
            penyelesaianMasalah: true,
            statistikKonteksPertanian: true,
            penutupRingkasan: true,
        },
        });
    }

    // FIND ONE
    findOne(id: bigint) {
        return this.prisma.surveyBagianUmum.findUnique({
        where: { id },
        include: {
            contact: true,
            prospekPetani: true,
            pelangganSti: true,
            tokoPengecer: true,
            mitraPengepul: true,
            ketuaPoktan: true,
            penyelesaianMasalah: true,
            statistikKonteksPertanian: true,
            penutupRingkasan: true,
            },
        });
    }

    update(id: bigint, data: UpdateSurveyUmumDto) {
        return this.prisma.surveyBagianUmum.update({
        where: { id },
        data,
        });
    }

    // DELETE
    remove(id: bigint) {
        return this.prisma.surveyBagianUmum.delete({
        where: { id },
        });
    }

}