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

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  tangananUtamaSaatIni: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  tangananUtamaSaatIni_Lainnya?: string;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsNumber()
  dampakHasil_Penurunan: number;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsNumber()
  dampakHasil_Area: number;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  solusi_ProdukMerek: string;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  solusi_Dosis: string;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  solusi_CaraPakai: string;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsNumber()
  solusi_Hasil: number;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  solusi_AlasanPuasTidak: string;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsNumber()
  rencanaTanamAnggaran_Budget: number;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsDecimal()
  rencanaTanamAnggaran_TargetHasil: number;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  rencanaTanamAnggaran_BatasWaktuTanam: string;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  perilakuPembelian_TokoLangganan: string;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  perilakuPembelian_Pengepul: string;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  perilakuPembelian_PengambilKeputusan: string;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsBoolean()
  minatProgramPembayaranPerpanen: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDecimal()
  minatProgramPembayaranPerpanen_KisaranHasil: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDecimal()
  minatProgramPembayaranPerpanen_FrequesiPanen: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  minatProgramPembayaranPerpanen_BuktiHasil: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  minatProgramPembayaranPerpanen_PreferensiTenor: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  minatProgramPembayaranPerpanen_Kesediaan: boolean;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsBoolean()
  minatProgramRewardMemberGetMember: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  minatProgramRewardMemberGetMember_TopikReward: string;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsBoolean()
  kebutuhanPendampinganAgronomis: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  kebutuhanPendampinganAgronomis_Topik: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  kebutuhanPendampinganAgronomis_WaktuKunjungan: Date;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  kesiapanUjiCobaProdukSti: string;

  @ApiProperty({ required: false })
  @IsOptional()
  // @IsString()
  kesiapanUjiCobaProdukSti_AlasanTidakBerminat: string;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  komitmenAwal: string;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  dokumentasi_Photo: string;
}

export class UpdateProspekPetaniDto extends CreateProspekPetaniDto {}
