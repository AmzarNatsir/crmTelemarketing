import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsDateString,
  IsNumber,
} from "class-validator";

export class CreateSurveyUmumDto {

  @ApiProperty()
  @IsString()
  jenisKontak: string;

  @ApiProperty()
  @IsString()
  namaLengkap: string;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  jabatan?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  noWa?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  noAlternatif?: string;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  alamatLahanUsaha?: string;

  @ApiProperty()
  @IsString()
  desa: string;

  @ApiProperty()
  @IsString()
  desaKode: string;

  @ApiProperty()
  @IsString()
  kecamatan: string;

  @ApiProperty()
  @IsString()
  kecamatanKode: string;

  @ApiProperty()
  @IsString()
  kabupaten: string;

  @ApiProperty()
  @IsString()
  kabupatenKode: string;

  @ApiProperty()
  @IsString()
  provinsi: string;

  @ApiProperty()
  @IsString()
  provinsiKode: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  titikKoordinat?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  komoditasUtama?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  komoditasUtamaLainnya?: string;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  luasLahan?: string;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  sistemIrigasi?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  sistemIrigasiLainnya?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  musimTanamTanggal?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  musimTanamPerkiraanPanen?: string;

  @ApiProperty( { required: false })
  @IsOptional()
  @IsString()
  musimTanamTahapPertumbuhan?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  sumberMengenalSti?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  sumberMengenalStiLainnya?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  persetujuanPerekamanPanggilan?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  persetujuanPengolahanData?: boolean;

  @ApiProperty( { required: false } )
  @IsOptional()
  @IsString()
  evidenceKunjungan?: string;

  @ApiProperty()
  @IsNumber()
  contactId: number;

  @ApiProperty()
  @IsNumber()
  userId: number;
}

export class UpdateSurveyUmumDto extends CreateSurveyUmumDto {}
