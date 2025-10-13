import { ApiProperty } from "@nestjs/swagger";
import { 
    IsDateString, 
    IsNumber, 
    IsString 
} from "class-validator";

export class StatistikDto {
    @ApiProperty()
    @IsNumber()
    surveyId: number;

    @ApiProperty()
    @IsString()
    curahHujan: string;

    @ApiProperty()
    @IsString()
    kejadianEkstrem: string;

    @ApiProperty()
    @IsDateString()
    tanggal: string;

    @ApiProperty()
    @IsNumber()
    harga_TrenHargaPupukBenihPestisida: number;

    @ApiProperty()
    @IsNumber()
    harga_HargaJualHasilPanen: number;

    @ApiProperty()
    @IsString()
    perubahanPraktikBudidaya_VarietasBaru: string;

    @ApiProperty()
    @IsString()
    perubahanPraktikBudidaya_PerubahanTeknik: string;

    @ApiProperty()
    @IsString()
    perubahanPraktikBudidaya_PenggunaanMesin: string;

    @ApiProperty()
    @IsString()
    sumberInformasiPetani_Media: string;

    @ApiProperty()
    @IsString()
    sumberInformasiPetani_TokohLokal: string;

    @ApiProperty()
    @IsString()
    sumberInformasiPetani_Penyuluh: string;
}

export class UpdateStatistikDto extends StatistikDto {}
