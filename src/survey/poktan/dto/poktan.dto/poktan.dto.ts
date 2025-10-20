import { ApiProperty } from "@nestjs/swagger";
import { 
    IsDateString, 
    IsInt, 
    IsNumber, 
    IsOptional, 
    IsString 
} from "class-validator";

export class PoktanDto {
    @ApiProperty()
    @IsNumber()
    surveyId: number;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    profil_Nama: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsInt()
    profil_JumlahAnggota: number;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    profil_TotalLuasTanam: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    profil_KomoditasMayor: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsDateString()
    agendaBudidaya_KalenderTanam: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    agendaBudidaya_TantanganUmum: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    agendaBudidaya_KegiatanKelompok: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    ketertarikan_SosialisasiProduk: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    ketertarikan_DemoPlot: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    ketertarikan_ProgramPendampingan: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    ketertarikan_SkemaPembelianKolektif: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    syaratEkspektasi_TransparansiHarga: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    syaratEkspektasi_DukunganTeknis: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    syaratEkspektasi_RewardKelompok: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsDateString()
    aksiAwal_JadwalSosialisasi: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    aksiAwal_LahanDemo: string;

    @ApiProperty( { required: false } )
    @IsOptional()
    @IsString()
    aksiAwal_Anngota: string;
}

export class UpdatePoktanDto extends PoktanDto {}
