import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsDecimal,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator';

export class CreateProspekPetaniDto {
  @ApiProperty({ description: 'ID relasi ke tabel SurveyBagianUmum' })
  @IsNumber()
  surveyId: number;

  @ApiProperty()
  @IsString()
  tangananUtamaSaatIni: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  tangananUtamaSaatIni_Lainnya?: string;

  @ApiProperty()
  @IsNumber()
  dampakHasil_Penurunan: number;

  @ApiProperty()
  @IsNumber()
  dampakHasil_Area: number;

  @ApiProperty()
  @IsString()
  solusi_ProdukMerek: string;

  @ApiProperty()
  @IsString()
  solusi_Dosis: string;

  @ApiProperty()
  @IsString()
  solusi_CaraPakai: string;

  @ApiProperty()
  @IsNumber()
  solusi_Hasil: number;

  @ApiProperty()
  @IsString()
  solusi_AlasanPuasTidak: string;

  @ApiProperty()
  @IsNumber()
  rencanaTanamAnggaran_Budget: number;

  @ApiProperty()
  @IsDecimal()
  rencanaTanamAnggaran_TargetHasil: number;

  @ApiProperty()
  @IsString()
  rencanaTanamAnggaran_BatasWaktuTanam: string;

  @ApiProperty()
  @IsString()
  perilakuPembelian_TokoLangganan: string;

  @ApiProperty()
  @IsString()
  perilakuPembelian_Pengepul: string;

  @ApiProperty()
  @IsString()
  perilakuPembelian_PengambilKeputusan: string;

  @ApiProperty()
  @IsBoolean()
  minatProgramPembayaranPerpanen: boolean;

  @ApiProperty()
  @IsDecimal()
  minatProgramPembayaranPerpanen_KisaranHasil: number;

  @ApiProperty()
  @IsDecimal()
  minatProgramPembayaranPerpanen_FrequesiPanen: number;

  @ApiProperty()
  @IsString()
  minatProgramPembayaranPerpanen_BuktiHasil: string;

  @ApiProperty()
  @IsString()
  minatProgramPembayaranPerpanen_PreferensiTenor: string;

  @ApiProperty()
  @IsBoolean()
  minatProgramPembayaranPerpanen_Kesediaan: boolean;

  @ApiProperty()
  @IsBoolean()
  minatProgramRewardMemberGetMember: boolean;

  @ApiProperty()
  @IsString()
  minatProgramRewardMemberGetMember_TopikReward: string;

  @ApiProperty()
  @IsBoolean()
  kebutuhanPendampinganAgronomis: boolean;

  @ApiProperty()
  @IsString()
  kebutuhanPendampinganAgronomis_Topik: string;

  @ApiProperty()
  @IsDateString()
  kebutuhanPendampinganAgronomis_WaktuKunjungan: Date;

  @ApiProperty()
  @IsString()
  kesiapanUjiCobaProdukSti: string;

  @ApiProperty()
  @IsString()
  kesiapanUjiCobaProdukSti_AlasanTidakBerminat: string;

  @ApiProperty()
  @IsString()
  komitmenAwal: string;

  @ApiProperty()
  @IsString()
  dokumentasi_Photo: string;
}

export class UpdateProspekPetaniDto extends CreateProspekPetaniDto {}
