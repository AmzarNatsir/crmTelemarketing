import { ApiProperty } from "@nestjs/swagger";
import { 
    IsBoolean, 
    IsDateString, 
    IsNumber, 
    IsOptional, 
    IsString 
} from "class-validator";

export class TokoPengecerDto {
    @ApiProperty()
    @IsNumber()
    surveyId: number;

    @ApiProperty()
    @IsString()
    profil_NamaToko: string;

    @ApiProperty()
    @IsString()
    profil_Alamat: string;

    @ApiProperty()
    @IsString()
    profil_KanalPenjualan: string;

    @ApiProperty()
    @IsString()
    profil_VolumePenjualanBulanan: string;

    @ApiProperty()
    @IsString()
    profil_MerekYangDijual: string;

    @ApiProperty()
    @IsString()
    kebutuhanKetertarikan_ProdukSti: string;

    @ApiProperty()
    @IsString()
    kebutuhanKetertarikan_Margin: string;

    @ApiProperty()
    @IsString()
    kebutuhanKetertarikan_SyaratPembayaran: string;

    @ApiProperty()
    @IsString()
    kebutuhanKetertarikan_DukunganPromosi: string;

    @ApiProperty()
    @IsString()
    kesediaanProgram_DisplayMateri: string;

    @ApiProperty()
    @IsString()
    kesediaanProgram_StokAwal: string;

    @ApiProperty()
    @IsString()
    kesediaanProgram_DemoPlot: string;

    @ApiProperty()
    @IsString()
    kesediaanProgram_ProgramPoin: string;

    @ApiProperty()
    @IsBoolean()
    rencanaKerjasama_POAwal: boolean;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    rencanaKerjasama_POAwal_Estimasi: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsDateString()
    rencanaKerjasama_JadwalPelatihan: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    rencanaKerjasama_TargetTigaBulan: string;

    @ApiProperty()
    @IsString()
    memberGetMember_Nama: string;

    @ApiProperty()
    @IsString()
    memberGetMember_Kontak: string;
}

export class UpdateTokoPengecerDto extends TokoPengecerDto {}
