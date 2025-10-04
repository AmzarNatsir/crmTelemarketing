import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";


export class CreateContactDto {
    @ApiProperty()
    @IsString()
    jenisKontak: string; 

    @ApiProperty({ required: true })
    @IsString()
    namaLengkap: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    jabatan?: string;

    @ApiProperty({ required: true })
    @IsString()
    noWa: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    noAlternatif?: string;

    @ApiProperty({ required: true })
    @IsString()
    alamatLahanUsaha: string;

    @ApiProperty({ required: true })
    @IsString()
    desa: string;

    @ApiProperty({ required: true })
    @IsString()
    desaKode: string;

    @ApiProperty({ required: true })
    @IsString()
    kecamatan: string;

    @ApiProperty({ required: true })
    @IsString()
    kecamatanKode: string;

    @ApiProperty({ required: true })
    @IsString()
    kabupaten: string;

    @ApiProperty({ required: true })
    @IsString()
    kabupatenKode: string;

    @ApiProperty({ required: true })
    @IsString()
    provinsi: string;

    @ApiProperty({ required: true })
    @IsString()
    provinsiKode: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    titikKoordinat?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    photoProfile?: string;
}

export class UpdateContactDto extends CreateContactDto {}
