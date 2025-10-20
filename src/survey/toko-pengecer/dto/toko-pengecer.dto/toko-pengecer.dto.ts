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

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    profil_NamaToko: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    profil_Alamat: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    profil_KanalPenjualan: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    profil_VolumePenjualanBulanan: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    profil_MerekYangDijual: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    kebutuhanKetertarikan_ProdukSti: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    kebutuhanKetertarikan_Margin: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    kebutuhanKetertarikan_SyaratPembayaran: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    kebutuhanKetertarikan_DukunganPromosi: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    kesediaanProgram_DisplayMateri: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    kesediaanProgram_StokAwal: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    kesediaanProgram_DemoPlot: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    kesediaanProgram_ProgramPoin: string;

    @ApiProperty( { required: false } )
    @IsOptional()
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

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    memberGetMember_Nama: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    memberGetMember_Kontak: string;
}

export class UpdateTokoPengecerDto extends TokoPengecerDto {}
