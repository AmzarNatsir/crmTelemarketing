import { ApiProperty } from "@nestjs/swagger";
import { 
    IsBoolean, 
    IsDateString, 
    IsNumber, 
    IsOptional, 
    IsString 
} from "class-validator";

export class MitraPengepulDto {
    @ApiProperty()
    @IsNumber()
    surveyId: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    profil_NamaUsaha: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    profil_KomoditasUtama: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    profil_WilayahJangkauan: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    profil_Musiman: boolean;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    kebutuhan_KonsistensiPasokan: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    kebutuhan_Kualitas: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    kebutuhan_DukunganBudidaya: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    modelKerjasama_SkemaKemitraan: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    modelKerjasama_KeterlibatanProgram: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    modelKerjasama_DukunganLogistikEdukasi: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    potensiIntegrasiDataPanen: boolean;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsDateString()
    komitmenAwal_PertemuanSelanjutnya: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    komitmenAwal_DataYangDibutuhkan: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    komitmenAwal_PicTeknis: string;
}

export class UpdateMitraPengepulDto extends MitraPengepulDto {}
