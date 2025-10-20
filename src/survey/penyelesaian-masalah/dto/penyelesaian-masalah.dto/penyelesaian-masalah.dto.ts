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

    @ApiProperty( { required: false })
    @IsOptional()
    @IsString()
    deskripsi_SejakKapan: string;

    @ApiProperty( { required: false })
    @IsOptional()
    @IsString()
    deskripsi_TahapanTanaman: string;

    @ApiProperty( { required: false })
    @IsOptional()
    @IsInt()
    dampak_LuasAreaTerdampak: number;

    @ApiProperty( { required: false })
    @IsOptional()
    @IsString()
    dampak_EstimasiPotensiPenurunanHasil: string;

    @ApiProperty( { required: false })
    @IsOptional()
    @IsString()
    riwayatTindakan_ProdukSolusi: string;

    @ApiProperty( { required: false })
    @IsOptional()
    @IsString()
    riwayatTindakan_Dosis: string;

    @ApiProperty( { required: false })
    @IsOptional()
    @IsDateString()
    riwayatTindakan_Tanggal: string;

    @ApiProperty( { required: false })
    @IsOptional()
    @IsString()
    akarDugaan: string;

    @ApiProperty({ required: false })
    @IsOptional()
    // @IsString()
    akarDugaan_Lainnya: string;

    @ApiProperty( { required: false })
    @IsOptional()
    @IsString()
    kebutuhanDukungan: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    rencanaAksiDisepakati_PaketRekomendasi: string;

    @ApiProperty( { required: false })
    @IsOptional()
    @IsString()
    rencanaAksiDisepakati_Siapa: string;

    @ApiProperty( { required: false })
    @IsOptional()
    @IsDateString()
    slaPemantauan_Tanggal: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
        message: 'slaPemantauan_Jam must be in HH:mm or HH:mm:ss format',
    })
    slaPemantauan_Jam?: string | null;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    statusTiket: string;
}

export class UpdatePenyelesaianMasalahDto extends PenyelesaianMasalahDto {}