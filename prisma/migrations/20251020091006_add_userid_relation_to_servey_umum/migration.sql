/*
  Warnings:

  - You are about to drop the `surveybagianumum` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `surveyketuapoktan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `surveymitrapengepul` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `surveypelanggansti` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `surveypenutupringkasan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `surveypenyelesaianmasalah` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `surveyprospekpetani` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `surveystatistikkontekspertanian` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `surveytokopengecer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `surveybagianumum` DROP FOREIGN KEY `SurveyBagianUmum_contactId_fkey`;

-- DropForeignKey
ALTER TABLE `surveyketuapoktan` DROP FOREIGN KEY `SurveyKetuaPoktan_surveyId_fkey`;

-- DropForeignKey
ALTER TABLE `surveymitrapengepul` DROP FOREIGN KEY `SurveyMitraPengepul_surveyId_fkey`;

-- DropForeignKey
ALTER TABLE `surveypelanggansti` DROP FOREIGN KEY `SurveyPelangganSti_surveyId_fkey`;

-- DropForeignKey
ALTER TABLE `surveypenutupringkasan` DROP FOREIGN KEY `SurveyPenutupRingkasan_surveyId_fkey`;

-- DropForeignKey
ALTER TABLE `surveypenyelesaianmasalah` DROP FOREIGN KEY `SurveyPenyelesaianMasalah_surveyId_fkey`;

-- DropForeignKey
ALTER TABLE `surveyprospekpetani` DROP FOREIGN KEY `SurveyProspekPetani_surveyId_fkey`;

-- DropForeignKey
ALTER TABLE `surveystatistikkontekspertanian` DROP FOREIGN KEY `SurveyStatistikKonteksPertanian_surveyId_fkey`;

-- DropForeignKey
ALTER TABLE `surveytokopengecer` DROP FOREIGN KEY `SurveyTokoPengecer_surveyId_fkey`;

-- DropTable
DROP TABLE `surveybagianumum`;

-- DropTable
DROP TABLE `surveyketuapoktan`;

-- DropTable
DROP TABLE `surveymitrapengepul`;

-- DropTable
DROP TABLE `surveypelanggansti`;

-- DropTable
DROP TABLE `surveypenutupringkasan`;

-- DropTable
DROP TABLE `surveypenyelesaianmasalah`;

-- DropTable
DROP TABLE `surveyprospekpetani`;

-- DropTable
DROP TABLE `surveystatistikkontekspertanian`;

-- DropTable
DROP TABLE `surveytokopengecer`;

-- CreateTable
CREATE TABLE `survey_bagian_umum` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `jenisKontak` VARCHAR(191) NULL,
    `namaLengkap` VARCHAR(191) NULL,
    `jabatan` VARCHAR(191) NULL,
    `noWa` VARCHAR(191) NULL,
    `noAlternatif` VARCHAR(191) NULL,
    `alamatLahanUsaha` VARCHAR(191) NULL,
    `desa` VARCHAR(191) NULL,
    `desaKode` VARCHAR(191) NULL,
    `kecamatan` VARCHAR(191) NULL,
    `kecamatanKode` VARCHAR(191) NULL,
    `kabupaten` VARCHAR(191) NULL,
    `kabupatenKode` VARCHAR(191) NULL,
    `provinsi` VARCHAR(191) NULL,
    `provinsiKode` VARCHAR(191) NULL,
    `titikKoordinat` VARCHAR(191) NULL,
    `komoditasUtama` VARCHAR(191) NULL,
    `komoditasUtamaLainnya` VARCHAR(191) NULL,
    `luasLahan` VARCHAR(191) NULL,
    `sistemIrigasi` VARCHAR(191) NULL,
    `sistemIrigasiLainnya` VARCHAR(191) NULL,
    `musimTanamTanggal` DATETIME(3) NULL,
    `musimTanamPerkiraanPanen` DATETIME(3) NULL,
    `musimTanamTahapPertumbuhan` VARCHAR(191) NULL,
    `sumberMengenalSti` VARCHAR(191) NULL,
    `sumberMengenalStiLainnya` VARCHAR(191) NULL,
    `persetujuanPerekamanPanggilan` BOOLEAN NULL,
    `persetujuanPengolahanData` BOOLEAN NULL,
    `evidenceKunjungan` VARCHAR(191) NULL,
    `contactId` BIGINT NOT NULL,
    `userId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `survey_bagian_umum_uuid_key`(`uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey_prospek_petani` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `surveyId` BIGINT NOT NULL,
    `tangananUtamaSaatIni` VARCHAR(191) NULL,
    `tangananUtamaSaatIni_Lainnya` VARCHAR(191) NULL,
    `dampakHasil_Penurunan` INTEGER NULL,
    `dampakHasil_Area` INTEGER NULL,
    `solusi_ProdukMerek` VARCHAR(191) NULL,
    `solusi_Dosis` VARCHAR(191) NULL,
    `solusi_CaraPakai` VARCHAR(191) NULL,
    `solusi_Hasil` INTEGER NULL,
    `solusi_AlasanPuasTidak` VARCHAR(191) NULL,
    `rencanaTanamAnggaran_Budget` DOUBLE NULL,
    `rencanaTanamAnggaran_TargetHasil` DECIMAL(65, 30) NULL,
    `rencanaTanamAnggaran_BatasWaktuTanam` VARCHAR(191) NULL,
    `perilakuPembelian_TokoLangganan` VARCHAR(191) NULL,
    `perilakuPembelian_Pengepul` VARCHAR(191) NULL,
    `perilakuPembelian_PengambilKeputusan` VARCHAR(191) NULL,
    `minatProgramPembayaranPerpanen` BOOLEAN NOT NULL,
    `minatProgramPembayaranPerpanen_KisaranHasil` DECIMAL(65, 30) NULL,
    `minatProgramPembayaranPerpanen_FrequesiPanen` DECIMAL(65, 30) NULL,
    `minatProgramPembayaranPerpanen_BuktiHasil` VARCHAR(191) NULL,
    `minatProgramPembayaranPerpanen_PreferensiTenor` VARCHAR(191) NULL,
    `minatProgramPembayaranPerpanen_Kesediaan` BOOLEAN NULL,
    `minatProgramRewardMemberGetMember` BOOLEAN NULL,
    `minatProgramRewardMemberGetMember_TopikReward` VARCHAR(191) NULL,
    `kebutuhanPendampinganAgronomis` BOOLEAN NULL,
    `kebutuhanPendampinganAgronomis_Topik` VARCHAR(191) NULL,
    `kebutuhanPendampinganAgronomis_WaktuKunjungan` DATETIME(3) NULL,
    `kesiapanUjiCobaProdukSti` VARCHAR(191) NULL,
    `kesiapanUjiCobaProdukSti_AlasanTidakBerminat` VARCHAR(191) NULL,
    `komitmenAwal` VARCHAR(191) NULL,
    `dokumentasi_Photo` VARCHAR(191) NULL,

    UNIQUE INDEX `survey_prospek_petani_uuid_key`(`uuid`),
    UNIQUE INDEX `survey_prospek_petani_surveyId_key`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey_pelanggan_sti` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `surveyId` BIGINT NOT NULL,
    `produkStiYangDigunakan_Nama` VARCHAR(191) NULL,
    `produkStiYangDigunakan_Batch` VARCHAR(191) NULL,
    `produkStiYangDigunakan_TanggalApplikasi` DATETIME(3) NULL,
    `produkStiYangDigunakan_DosisCaraPakai` VARCHAR(191) NULL,
    `perkembanganTanaman_Pertumbuhan` INTEGER NULL,
    `perkembanganTanaman_HijauDaun` INTEGER NULL,
    `perkembanganTanaman_Akar` INTEGER NULL,
    `perkembanganTanaman_BungaPolongBuah` INTEGER NULL,
    `kondisiCuaca` VARCHAR(191) NULL,
    `kondisiCuaca_Catatan` VARCHAR(191) NULL,
    `masalahYangMuncul_Jenis` VARCHAR(191) NULL,
    `masalahYangMuncul_LuasTerdampak` DECIMAL(65, 30) NULL,
    `masalahYangMuncul_Keparahan` INTEGER NULL,
    `masalahYangMuncul_Photo` VARCHAR(191) NULL,
    `tindakanKorektif_Apa` VARCHAR(191) NULL,
    `tindakanKorektif_Kapan` DATETIME(3) NULL,
    `tindakanKorektif_HasilAwal` INTEGER NULL,
    `butuhPendampingan` BOOLEAN NULL,
    `butuhPendampingan_Jadwal` DATETIME(3) NULL,
    `butuhPendampingan_Lokasi` VARCHAR(191) NULL,
    `butuhPendampingan_Tujuan` VARCHAR(191) NULL,
    `perkiraanHasil` DECIMAL(65, 30) NULL,
    `rencanaPanen` DATETIME(3) NULL,
    `kepuasanTerhadapProdukLayanan_Nilai` INTEGER NULL,
    `kepuasanTerhadapProdukLayanan_Alasan` VARCHAR(191) NULL,
    `minatIkutLanjutProgramReward` BOOLEAN NULL,
    `memberGetMember` BOOLEAN NULL,
    `memberGetMember_Referal` VARCHAR(191) NULL,
    `nextStep_TindakLanjut` VARCHAR(191) NULL,
    `nextStep_WaktuFollowup` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `survey_pelanggan_sti_uuid_key`(`uuid`),
    UNIQUE INDEX `survey_pelanggan_sti_surveyId_key`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey_toko_pengecer` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `surveyId` BIGINT NOT NULL,
    `profil_NamaToko` VARCHAR(191) NULL,
    `profil_Alamat` VARCHAR(191) NULL,
    `profil_KanalPenjualan` VARCHAR(191) NULL,
    `profil_VolumePenjualanBulanan` VARCHAR(191) NULL,
    `profil_MerekYangDijual` VARCHAR(191) NULL,
    `kebutuhanKetertarikan_ProdukSti` VARCHAR(191) NULL,
    `kebutuhanKetertarikan_Margin` VARCHAR(191) NULL,
    `kebutuhanKetertarikan_SyaratPembayaran` VARCHAR(191) NULL,
    `kebutuhanKetertarikan_DukunganPromosi` VARCHAR(191) NULL,
    `kesediaanProgram_DisplayMateri` VARCHAR(191) NULL,
    `kesediaanProgram_StokAwal` VARCHAR(191) NULL,
    `kesediaanProgram_DemoPlot` VARCHAR(191) NULL,
    `kesediaanProgram_ProgramPoin` VARCHAR(191) NULL,
    `rencanaKerjasama_POAwal` BOOLEAN NULL,
    `rencanaKerjasama_POAwal_Estimasi` VARCHAR(191) NULL,
    `rencanaKerjasama_JadwalPelatihan` DATETIME(3) NULL,
    `rencanaKerjasama_TargetTigaBulan` VARCHAR(191) NULL,
    `memberGetMember_Nama` VARCHAR(191) NULL,
    `memberGetMember_Kontak` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `survey_toko_pengecer_uuid_key`(`uuid`),
    UNIQUE INDEX `survey_toko_pengecer_surveyId_key`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey_mitra_pengepul` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `surveyId` BIGINT NOT NULL,
    `profil_NamaUsaha` VARCHAR(191) NULL,
    `profil_KomoditasUtama` VARCHAR(191) NULL,
    `profil_WilayahJangkauan` VARCHAR(191) NULL,
    `profil_Musiman` BOOLEAN NULL,
    `kebutuhan_KonsistensiPasokan` VARCHAR(191) NULL,
    `kebutuhan_Kualitas` VARCHAR(191) NULL,
    `kebutuhan_DukunganBudidaya` VARCHAR(191) NULL,
    `modelKerjasama_SkemaKemitraan` VARCHAR(191) NULL,
    `modelKerjasama_KeterlibatanProgram` VARCHAR(191) NULL,
    `modelKerjasama_DukunganLogistikEdukasi` VARCHAR(191) NULL,
    `potensiIntegrasiDataPanen` BOOLEAN NULL,
    `komitmenAwal_PertemuanSelanjutnya` DATETIME(3) NULL,
    `komitmenAwal_DataYangDibutuhkan` VARCHAR(191) NULL,
    `komitmenAwal_PicTeknis` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `survey_mitra_pengepul_uuid_key`(`uuid`),
    UNIQUE INDEX `survey_mitra_pengepul_surveyId_key`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey_ketua_poktan` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `surveyId` BIGINT NOT NULL,
    `profil_Nama` VARCHAR(191) NULL,
    `profil_JumlahAnggota` INTEGER NULL,
    `profil_TotalLuasTanam` VARCHAR(191) NULL,
    `profil_KomoditasMayor` VARCHAR(191) NULL,
    `agendaBudidaya_KalenderTanam` DATETIME(3) NULL,
    `agendaBudidaya_TantanganUmum` VARCHAR(191) NULL,
    `agendaBudidaya_KegiatanKelompok` VARCHAR(191) NULL,
    `ketertarikan_SosialisasiProduk` VARCHAR(191) NULL,
    `ketertarikan_DemoPlot` VARCHAR(191) NULL,
    `ketertarikan_ProgramPendampingan` VARCHAR(191) NULL,
    `ketertarikan_SkemaPembelianKolektif` VARCHAR(191) NULL,
    `syaratEkspektasi_TransparansiHarga` VARCHAR(191) NULL,
    `syaratEkspektasi_DukunganTeknis` VARCHAR(191) NULL,
    `syaratEkspektasi_RewardKelompok` VARCHAR(191) NULL,
    `aksiAwal_JadwalSosialisasi` DATETIME(3) NULL,
    `aksiAwal_LahanDemo` VARCHAR(191) NULL,
    `aksiAwal_Anngota` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `survey_ketua_poktan_uuid_key`(`uuid`),
    UNIQUE INDEX `survey_ketua_poktan_surveyId_key`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey_penyelesaian_masalah` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `surveyId` BIGINT NOT NULL,
    `deskripsi_SejakKapan` VARCHAR(191) NULL,
    `deskripsi_TahapanTanaman` VARCHAR(191) NULL,
    `dampak_LuasAreaTerdampak` INTEGER NULL,
    `dampak_EstimasiPotensiPenurunanHasil` VARCHAR(191) NULL,
    `riwayatTindakan_ProdukSolusi` VARCHAR(191) NULL,
    `riwayatTindakan_Dosis` VARCHAR(191) NULL,
    `riwayatTindakan_Tanggal` DATETIME(3) NULL,
    `akarDugaan` VARCHAR(191) NULL,
    `akarDugaan_Lainnya` VARCHAR(191) NULL,
    `kebutuhanDukungan` VARCHAR(191) NULL,
    `rencanaAksiDisepakati_PaketRekomendasi` VARCHAR(191) NULL,
    `rencanaAksiDisepakati_Siapa` VARCHAR(191) NULL,
    `slaPemantauan_Tanggal` DATETIME(3) NULL,
    `slaPemantauan_Jam` VARCHAR(191) NULL,
    `statusTiket` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `survey_penyelesaian_masalah_uuid_key`(`uuid`),
    UNIQUE INDEX `survey_penyelesaian_masalah_surveyId_key`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey_statistik_konteks_pertanian` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `surveyId` BIGINT NOT NULL,
    `curahHujan` VARCHAR(191) NULL,
    `kejadianEkstrem` VARCHAR(191) NULL,
    `tanggal` DATETIME(3) NULL,
    `harga_TrenHargaPupukBenihPestisida` DOUBLE NULL,
    `harga_HargaJualHasilPanen` DOUBLE NULL,
    `perubahanPraktikBudidaya_VarietasBaru` VARCHAR(191) NULL,
    `perubahanPraktikBudidaya_PerubahanTeknik` VARCHAR(191) NULL,
    `perubahanPraktikBudidaya_PenggunaanMesin` VARCHAR(191) NULL,
    `sumberInformasiPetani_Media` VARCHAR(191) NULL,
    `sumberInformasiPetani_TokohLokal` VARCHAR(191) NULL,
    `sumberInformasiPetani_Penyuluh` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `survey_statistik_konteks_pertanian_uuid_key`(`uuid`),
    UNIQUE INDEX `survey_statistik_konteks_pertanian_surveyId_key`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey_penutup_ringkasan` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `surveyId` BIGINT NOT NULL,
    `ringkasanKebutuhanSolusi` TEXT NOT NULL,
    `komitmenTindakLanjut_Apa` TEXT NOT NULL,
    `komitmenTindakLanjut_OlehSiapa` TEXT NOT NULL,
    `komitmenTindakLanjut_KapanTanggal` DATETIME(3) NULL,
    `komitmenTindakLanjut_KapanJam` VARCHAR(191) NULL,
    `jadwalFollowup_Tanggal` DATETIME(3) NULL,
    `jadwalFollowup_Jam` VARCHAR(191) NULL,
    `jadwalFollowup_Kanal` VARCHAR(191) NULL,
    `dokumentasi` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `survey_penutup_ringkasan_uuid_key`(`uuid`),
    UNIQUE INDEX `survey_penutup_ringkasan_surveyId_key`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `survey_bagian_umum` ADD CONSTRAINT `survey_bagian_umum_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `contact`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `survey_bagian_umum` ADD CONSTRAINT `survey_bagian_umum_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `survey_prospek_petani` ADD CONSTRAINT `survey_prospek_petani_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `survey_bagian_umum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `survey_pelanggan_sti` ADD CONSTRAINT `survey_pelanggan_sti_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `survey_bagian_umum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `survey_toko_pengecer` ADD CONSTRAINT `survey_toko_pengecer_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `survey_bagian_umum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `survey_mitra_pengepul` ADD CONSTRAINT `survey_mitra_pengepul_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `survey_bagian_umum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `survey_ketua_poktan` ADD CONSTRAINT `survey_ketua_poktan_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `survey_bagian_umum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `survey_penyelesaian_masalah` ADD CONSTRAINT `survey_penyelesaian_masalah_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `survey_bagian_umum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `survey_statistik_konteks_pertanian` ADD CONSTRAINT `survey_statistik_konteks_pertanian_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `survey_bagian_umum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `survey_penutup_ringkasan` ADD CONSTRAINT `survey_penutup_ringkasan_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `survey_bagian_umum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `contact` RENAME INDEX `Contact_uuid_key` TO `contact_uuid_key`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_email_key` TO `user_email_key`;
