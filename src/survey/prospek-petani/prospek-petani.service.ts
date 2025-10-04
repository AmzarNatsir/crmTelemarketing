import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProspekPetaniDto, UpdateProspekPetaniDto } from "./dto/prospek-petani.dto";

@Injectable()
export class ProspekPetaniService {
    constructor(private prisma: PrismaService) {}  

    async create(data: CreateProspekPetaniDto) {
        try {
            return this.prisma.surveyProspekPetani.create({ data });
        } catch (error) {
            console.error('Error Survey Prospek Petani:', error);
            throw error;
        }
        
    }

    // FIND ALL (include surveys)
    findAll() {
        return this.prisma.surveyProspekPetani.findMany({
        include: {
            survey: true,
        },
        });
    }

    // FIND ONE
    findOne(id: bigint) {
        return this.prisma.surveyProspekPetani.findUnique({
        where: { id },
        include: {
            survey: true,
        },
        });
    }

    update(id: bigint, data: UpdateProspekPetaniDto) {
        return this.prisma.surveyProspekPetani.update({
        where: { id },
        data,
        });
    }

    // DELETE
    remove(id: bigint) {
        return this.prisma.surveyProspekPetani.delete({
        where: { id },
        });
    }

}