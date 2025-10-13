import { ApiProperty } from "@nestjs/swagger";
import { 
    IsBoolean, 
    IsDateString, 
    IsNumber, 
    IsString 
} from "class-validator";

export class MitraPengepulDto {
    @ApiProperty()
    @IsNumber()
    surveyId: number;

    @ApiProperty()
    @IsString()
    profil_NamaUsaha: string;

    @ApiProperty()
    @IsString()
    profil_KomoditasUtama: string;

    @ApiProperty()
    @IsString()
    profil_WilayahJangkauan: string;

    @ApiProperty()
    @IsBoolean()
    profil_Musiman: boolean;

    @ApiProperty()
    @IsString()
    kebutuhan_KonsistensiPasokan: string;

    @ApiProperty()
    @IsString()
    kebutuhan_Kualitas: string;

    @ApiProperty()
    @IsString()
    kebutuhan_DukunganBudidaya: string;

    @ApiProperty()
    @IsString()
    modelKerjasama_SkemaKemitraan: string;

    @ApiProperty()
    @IsString()
    modelKerjasama_KeterlibatanProgram: string;

    @ApiProperty()
    @IsString()
    modelKerjasama_DukunganLogistikEdukasi: string;

    @ApiProperty()
    @IsBoolean()
    potensiIntegrasiDataPanen: boolean;

    @ApiProperty()
    @IsDateString()
    komitmenAwal_PertemuanSelanjutnya: string;

    @ApiProperty()
    @IsString()
    komitmenAwal_DataYangDibutuhkan: string;

    @ApiProperty()
    @IsString()
    komitmenAwal_PicTeknis: string;
}

export class UpdateMitraPengepulDto extends MitraPengepulDto {}
