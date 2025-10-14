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

    // FIND ALL (include surveys) with pagination
    async findAll(page: number = 1, limit: number = 10) {
        const skip = (page - 1) * limit;
        
        const [contacts, total] = await Promise.all([
            this.prisma.contact.findMany({
                skip,
                take: limit,
                include: {
                    surveys: true,
                },
            }),
            this.prisma.contact.count()
        ]);
        
        return {
            contacts,
            total,
            page,
            limit,
        };
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