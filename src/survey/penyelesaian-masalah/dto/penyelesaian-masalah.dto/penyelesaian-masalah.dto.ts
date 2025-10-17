import { ApiProperty } from "@nestjs/swagger";
import { 
    IsDateString, 
    IsInt, 
    IsNumber, 
    IsOptional, 
    IsString, 
    Matches
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

    @IsOptional()
    @IsString()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
        message: 'slaPemantauan_Jam must be in HH:mm or HH:mm:ss format',
    })
    slaPemantauan_Jam?: string | null;

    @ApiProperty()
    @IsString()
    statusTiket: string;
}

export class UpdatePenyelesaianMasalahDto extends PenyelesaianMasalahDto {}