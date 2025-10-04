import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";


export class CreateContactDto {
    @ApiProperty()
    @IsString()
    jenisKontak: string; 

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    namaLengkap?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    jabatan?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    noWa?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    noAlternatif?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    alamatLahanUsaha?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    desa?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    desaKode?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    kecamatan?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    kecamatanKode?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    kabupaten?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    kabupatenKode?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    provinsi?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    provinsiKode?: string;

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
