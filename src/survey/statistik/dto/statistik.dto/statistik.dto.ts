import { ApiProperty } from "@nestjs/swagger";
import { 
    IsDateString, 
    IsNumber, 
    IsString ,
    IsOptional
} from "class-validator";

export class StatistikDto {
    @ApiProperty()
    @IsNumber()
    surveyId: number;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    curahHujan: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    kejadianEkstrem: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsDateString()
    tanggal: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsNumber()
    harga_TrenHargaPupukBenihPestisida: number;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsNumber()
    harga_HargaJualHasilPanen: number;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    perubahanPraktikBudidaya_VarietasBaru: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    perubahanPraktikBudidaya_PerubahanTeknik: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    perubahanPraktikBudidaya_PenggunaanMesin: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    sumberInformasiPetani_Media: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    sumberInformasiPetani_TokohLokal: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    sumberInformasiPetani_Penyuluh: string;
}

export class UpdateStatistikDto extends StatistikDto {}
