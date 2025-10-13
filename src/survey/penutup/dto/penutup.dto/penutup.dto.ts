import { ApiProperty } from "@nestjs/swagger";
import { 
    IsDateString, 
    IsNumber, 
    IsString 
} from "class-validator";

export class PenutupDto {
    @ApiProperty()
    @IsNumber()
    surveyId: number;

    @ApiProperty()
    @IsString()
    ringkasanKebutuhanSolusi: string;

    @ApiProperty()
    @IsString()
    komitmenTindakLanjut_Apa: string;

    @ApiProperty()
    @IsString()
    komitmenTindakLanjut_OlehSiapa: string;

    @ApiProperty()
    @IsDateString()
    komitmenTindakLanjut_KapanTanggal: string;

    @ApiProperty()
    @IsDateString()
    komitmenTindakLanjut_KapanJam: string;

    @ApiProperty()
    @IsDateString()
    jadwalFollowup_Tanggal: string;

    @ApiProperty()
    @IsDateString()
    jadwalFollowup_Jam: string;

    @ApiProperty()
    @IsString()
    jadwalFollowup_Kanal: string;

    @ApiProperty()
    @IsString()
    dokumentasi: string;

}

export class UpdatePenutupDto extends PenutupDto {}
