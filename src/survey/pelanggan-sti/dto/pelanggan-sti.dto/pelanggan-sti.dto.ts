import { ApiProperty } from "@nestjs/swagger";
import { 
    IsBoolean, 
    IsDateString,
    IsNumber, 
    IsOptional, 
    IsString 
} from "class-validator";

export class PelangganStiDto {
    @ApiProperty()
  @IsNumber()
  surveyId: number; // relasi ke SurveyBagianUmum

  @ApiProperty()
  @IsString()
  produkStiYangDigunakan_Nama: string;

  @ApiProperty()
  @IsString()
  produkStiYangDigunakan_Batch: string;

  @ApiProperty()
  @IsDateString()
  produkStiYangDigunakan_TanggalApplikasi: string;

  @ApiProperty()
  @IsString()
  produkStiYangDigunakan_DosisCaraPakai: string;

  @ApiProperty()
  // @IsNumber()
  perkembanganTanaman_Pertumbuhan: number;

  @ApiProperty()
  // @IsNumber()
  perkembanganTanaman_HijauDaun: number;

  @ApiProperty()
  // @IsNumber()
  perkembanganTanaman_Akar: number;

  @ApiProperty()
  // @IsNumber()
  perkembanganTanaman_BungaPolongBuah: number;

  @ApiProperty()
  @IsString()
  kondisiCuaca: string;

  @ApiProperty()
  @IsString()
  kondisiCuaca_Catatan: string;

  @ApiProperty()
  @IsString()
  masalahYangMuncul_Jenis: string;

  @ApiProperty()
  @IsNumber()
  masalahYangMuncul_LuasTerdampak: number;

  @ApiProperty()
  @IsNumber()
  masalahYangMuncul_Keparahan: number;

  @ApiProperty()
  @IsString()
  masalahYangMuncul_Photo: string;

  @ApiProperty()
  @IsString()
  tindakanKorektif_Apa: string;

  @ApiProperty()
  @IsDateString()
  tindakanKorektif_Kapan: string;

  @ApiProperty()
  @IsNumber()
  tindakanKorektif_HasilAwal: number;

  @ApiProperty()
  @IsBoolean()
  butuhPendampingan: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  butuhPendampingan_Jadwal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  butuhPendampingan_Lokasi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  butuhPendampingan_Tujuan: string;

  @ApiProperty()
  @IsNumber()
  perkiraanHasil: number;

  @ApiProperty()
  @IsDateString()
  rencanaPanen: string;

  @ApiProperty()
  @IsNumber()
  kepuasanTerhadapProdukLayanan_Nilai: number;

  @ApiProperty()
  @IsString()
  kepuasanTerhadapProdukLayanan_Alasan: string;

  @ApiProperty()
  @IsBoolean()
  minatIkutLanjutProgramReward: boolean;

  @ApiProperty()
  @IsBoolean()
  memberGetMember: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  memberGetMember_Referal: string;

  @ApiProperty()
  @IsString()
  nextStep_TindakLanjut: string;

  @ApiProperty()
  @IsDateString()
  nextStep_WaktuFollowup: string;
}

export class UpdatePelangganStiDto extends PelangganStiDto {}
