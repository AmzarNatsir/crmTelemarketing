import { ApiProperty } from "@nestjs/swagger";
import { 
    IsDateString, 
    IsInt, 
    IsNumber, 
    IsString 
} from "class-validator";

export class PenyelesaianMasalahDto {
    @ApiProperty()
    @IsNumber()
    surveyId: number;

    @ApiProperty()
    @IsString()
    deskripsi_SejakKapan: string;

    @ApiProperty()
    @IsString()
    deskripsi_TahapanTanaman: string;

    @ApiProperty()
    @IsInt()
    dampak_LuasAreaTerdampak: number;

    @ApiProperty()
    @IsString()
    dampak_EstimasiPotensiPenurunanHasil: string;

    @ApiProperty()
    @IsString()
    riwayatTindakan_ProdukSolusi: string;

    @ApiProperty()
    @IsString()
    riwayatTindakan_Dosis: string;

    @ApiProperty()
    @IsDateString()
    riwayatTindakan_Tanggal: string;

    @ApiProperty()
    @IsString()
    akarDugaan: string;

    @ApiProperty()
    @IsString()
    akarDugaan_Lainnya: string;

    @ApiProperty()
    @IsString()
    kebutuhanDukungan: string;

    @ApiProperty()
    @IsString()
    rencanaAksiDisepakati_PaketRekomendasi: string;

    @ApiProperty()
    @IsString()
    rencanaAksiDisepakati_Siapa: string;

    @ApiProperty()
    @IsDateString()
    slaPemantauan_Tanggal: string;

    @ApiProperty({
        description: 'Format jam (HH:mm:ss) — Prisma menyimpannya sebagai @db.Time',
    })
    @IsDateString()
    slaPemantauan_Jam: string;

    @ApiProperty()
    @IsString()
    statusTiket: string;
}

export class UpdatePenyelesaianMasalahDto extends PenyelesaianMasalahDto {}