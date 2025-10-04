import { Injectable } from "@nestjs/common";
import { Prisma } from "generated/prisma/wasm";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateContactDto, UpdateContactDto } from "./dto/contact.dto";

@Injectable()
export class ContactService {
    constructor(private prisma: PrismaService) {}  

    async create(data: CreateContactDto) {
        return this.prisma.contact.create({ data });
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