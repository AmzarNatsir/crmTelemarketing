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

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  produkStiYangDigunakan_Nama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  produkStiYangDigunakan_Batch: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  produkStiYangDigunakan_TanggalApplikasi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  produkStiYangDigunakan_DosisCaraPakai: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  perkembanganTanaman_Pertumbuhan: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  perkembanganTanaman_HijauDaun: number;

  @ApiProperty( { required: false })
  @IsOptional()
  @IsNumber()
  perkembanganTanaman_Akar: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  perkembanganTanaman_BungaPolongBuah: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  kondisiCuaca: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  kondisiCuaca_Catatan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  masalahYangMuncul_Jenis: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  masalahYangMuncul_LuasTerdampak: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  masalahYangMuncul_Keparahan: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  masalahYangMuncul_Photo: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  tindakanKorektif_Apa: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  tindakanKorektif_Kapan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  tindakanKorektif_HasilAwal: number;

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

  @ApiProperty( { required: false })
  @IsOptional()
  @IsNumber()
  perkiraanHasil: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  rencanaPanen: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  kepuasanTerhadapProdukLayanan_Nilai: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  kepuasanTerhadapProdukLayanan_Alasan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  minatIkutLanjutProgramReward: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  memberGetMember_Referal: string;

  @ApiProperty( { required: false })
  @IsOptional()
  @IsString()
  nextStep_TindakLanjut: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  nextStep_WaktuFollowup: string;
}

export class UpdatePelangganStiDto extends PelangganStiDto {}
