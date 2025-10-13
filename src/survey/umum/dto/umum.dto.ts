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

  @ApiProperty()
  @IsString()
  jabatan: string;

  @ApiProperty()
  @IsString()
  noWa: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  noAlternatif?: string;

  @ApiProperty()
  @IsString()
  alamatLahanUsaha: string;

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

  @ApiProperty()
  @IsString()
  komoditasUtama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  komoditasUtamaLainnya?: string;

  @ApiProperty()
  @IsString()
  luasLahan: string;

  @ApiProperty()
  @IsString()
  sistemIrigasi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  sistemIrigasiLainnya?: string;

  @ApiProperty()
  @IsDateString()
  musimTanamTanggal: string;

  @ApiProperty()
  @IsDateString()
  musimTanamPerkiraanPanen: string;

  @ApiProperty()
  @IsString()
  musimTanamTahapPertumbuhan: string;

  @ApiProperty()
  @IsString()
  sumberMengenalSti: string;

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

  @ApiProperty()
  @IsString()
  evidenceKunjungan: string;

  @ApiProperty()
  @IsNumber()
  contactId: number;
}

export class UpdateSurveyUmumDto extends CreateSurveyUmumDto {}
