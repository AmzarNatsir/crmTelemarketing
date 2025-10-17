import { ApiProperty } from "@nestjs/swagger";
import { 
    IsDateString, 
    IsNumber, 
    IsOptional, 
    IsString, 
    Matches
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

    @ApiProperty({ required: false })
    @IsString()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
        message: 'komitmenTindakLanjut_KapanJam must be in HH:mm or HH:mm:ss format',
    })
    komitmenTindakLanjut_KapanJam?: string | null;


    @ApiProperty()
    @IsDateString()
    jadwalFollowup_Tanggal: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
        message: 'jadwalFollowup_Jam must be in HH:mm or HH:mm:ss format',
    })
    jadwalFollowup_Jam?: string | null;

    @ApiProperty()
    @IsString()
    jadwalFollowup_Kanal: string;

    @ApiProperty()
    @IsString()
    dokumentasi: string;

}

export class UpdatePenutupDto extends PenutupDto {}
