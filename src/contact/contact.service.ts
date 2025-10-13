import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateContactDto, UpdateContactDto } from "./dto/contact.dto";

@Injectable()
export class ContactService {
    constructor(private prisma: PrismaService) {}  

    async create(data: CreateContactDto) {
        try {
            return this.prisma.contact.create({ data });
        } catch (error) {
            console.error('Error create contact:', error);
            throw error;
        }
        
    }

    // FIND ALL (include surveys)
    findAll() {
        return this.prisma.contact.findMany({
        include: {
            surveys: true,
        },
        });
    }

    // FIND ONE
    findOne(id: bigint) {
        return this.prisma.contact.findUnique({
        where: { id },
        include: {
            surveys: true,
        },
        });
    }

    update(id: bigint, data: UpdateContactDto) {
        return this.prisma.contact.update({
        where: { id },
        data,
        });
    }

    // DELETE
    remove(id: bigint) {
        return this.prisma.contact.delete({
        where: { id },
        });
    }

}