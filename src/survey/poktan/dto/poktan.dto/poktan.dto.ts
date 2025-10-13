import { ApiProperty } from "@nestjs/swagger";
import { 
    IsDateString, 
    IsInt, 
    IsNumber, 
    IsString 
} from "class-validator";

export class PoktanDto {
    @ApiProperty()
    @IsNumber()
    surveyId: number;

    @ApiProperty()
    @IsString()
    profil_Nama: string;

    @ApiProperty()
    @IsInt()
    profil_JumlahAnggota: number;

    @ApiProperty()
    @IsString()
    profil_TotalLuasTanam: string;

    @ApiProperty()
    @IsString()
    profil_KomoditasMayor: string;

    @ApiProperty()
    @IsDateString()
    agendaBudidaya_KalenderTanam: string;

    @ApiProperty()
    @IsString()
    agendaBudidaya_TantanganUmum: string;

    @ApiProperty()
    @IsString()
    agendaBudidaya_KegiatanKelompok: string;

    @ApiProperty()
    @IsString()
    ketertarikan_SosialisasiProduk: string;

    @ApiProperty()
    @IsString()
    ketertarikan_DemoPlot: string;

    @ApiProperty()
    @IsString()
    ketertarikan_ProgramPendampingan: string;

    @ApiProperty()
    @IsString()
    ketertarikan_SkemaPembelianKolektif: string;

    @ApiProperty()
    @IsString()
    syaratEkspektasi_TransparansiHarga: string;

    @ApiProperty()
    @IsString()
    syaratEkspektasi_DukunganTeknis: string;

    @ApiProperty()
    @IsString()
    syaratEkspektasi_RewardKelompok: string;

    @ApiProperty()
    @IsDateString()
    aksiAwal_JadwalSosialisasi: string;

    @ApiProperty()
    @IsString()
    aksiAwal_LahanDemo: string;

    @ApiProperty()
    @IsString()
    aksiAwal_Anngota: string;
}

export class UpdatePoktanDto extends PoktanDto {}
