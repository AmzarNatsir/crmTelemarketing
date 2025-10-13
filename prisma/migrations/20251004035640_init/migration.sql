-- CreateTable
CREATE TABLE `Contact` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `jenisKontak` VARCHAR(191) NOT NULL,
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
    `photoProfile` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Contact_uuid_key`(`uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SurveyBagianUmum` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `jenisKontak` VARCHAR(191) NOT NULL,
    `namaLengkap` VARCHAR(191) NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `noWa` VARCHAR(191) NOT NULL,
    `noAlternatif` VARCHAR(191) NULL,
    `alamatLahanUsaha` VARCHAR(191) NOT NULL,
    `desa` VARCHAR(191) NOT NULL,
    `desaKode` VARCHAR(191) NOT NULL,
    `kecamatan` VARCHAR(191) NOT NULL,
    `kecamatanKode` VARCHAR(191) NOT NULL,
    `kabupaten` VARCHAR(191) NOT NULL,
    `kabupatenKode` VARCHAR(191) NOT NULL,
    `provinsi` VARCHAR(191) NOT NULL,
    `provinsiKode` VARCHAR(191) NOT NULL,
    `titikKoordinat` VARCHAR(191) NULL,
    `komoditasUtama` VARCHAR(191) NOT NULL,
    `komoditasUtamaLainnya` VARCHAR(191) NOT NULL,
    `luasLahan` VARCHAR(191) NOT NULL,
    `sistemIrigasi` VARCHAR(191) NOT NULL,
    `sistemIrigasiLainnya` VARCHAR(191) NULL,
    `musimTanamTanggal` DATETIME(3) NOT NULL,
    `musimTanamPerkiraanPanen` DATETIME(3) NOT NULL,
    `musimTanamTahapPertumbuhan` VARCHAR(191) NOT NULL,
    `sumberMengenalSti` VARCHAR(191) NOT NULL,
    `sumberMengenalStiLainnya` VARCHAR(191) NULL,
    `persetujuanPerekamanPanggilan` BOOLEAN NULL,
    `persetujuanPengolahanData` BOOLEAN NULL,
    `evidenceKunjungan` VARCHAR(191) NOT NULL,
    `contactId` BIGINT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SurveyBagianUmum_uuid_key`(`uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SurveyProspekPetani` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `surveyId` BIGINT NOT NULL,
    `tangananUtamaSaatIni` VARCHAR(191) NOT NULL,
    `tangananUtamaSaatIni_Lainnya` VARCHAR(191) NULL,
    `dampakHasil_Penurunan` INTEGER NOT NULL,
    `dampakHasil_Area` INTEGER NOT NULL,
    `solusi_ProdukMerek` VARCHAR(191) NOT NULL,
    `solusi_Dosis` VARCHAR(191) NOT NULL,
    `solusi_CaraPakai` VARCHAR(191) NOT NULL,
    `solusi_Hasil` INTEGER NOT NULL,
    `solusi_AlasanPuasTidak` VARCHAR(191) NOT NULL,
    `rencanaTanamAnggaran_Budget` DOUBLE NOT NULL,
    `rencanaTanamAnggaran_TargetHasil` DECIMAL(65, 30) NOT NULL,
    `rencanaTanamAnggaran_BatasWaktuTanam` VARCHAR(191) NOT NULL,
    `perilakuPembelian_TokoLangganan` VARCHAR(191) NOT NULL,
    `perilakuPembelian_Pengepul` VARCHAR(191) NOT NULL,
    `perilakuPembelian_PengambilKeputusan` VARCHAR(191) NOT NULL,
    `minatProgramPembayaranPerpanen` BOOLEAN NOT NULL,
    `minatProgramPembayaranPerpanen_KisaranHasil` DECIMAL(65, 30) NOT NULL,
    `minatProgramPembayaranPerpanen_FrequesiPanen` DECIMAL(65, 30) NOT NULL,
    `minatProgramPembayaranPerpanen_BuktiHasil` VARCHAR(191) NOT NULL,
    `minatProgramPembayaranPerpanen_PreferensiTenor` VARCHAR(191) NOT NULL,
    `minatProgramPembayaranPerpanen_Kesediaan` BOOLEAN NOT NULL,
    `minatProgramRewardMemberGetMember` BOOLEAN NOT NULL,
    `minatProgramRewardMemberGetMember_TopikReward` VARCHAR(191) NOT NULL,
    `kebutuhanPendampinganAgronomis` BOOLEAN NOT NULL,
    `kebutuhanPendampinganAgronomis_Topik` VARCHAR(191) NOT NULL,
    `kebutuhanPendampinganAgronomis_WaktuKunjungan` DATETIME(3) NOT NULL,
    `kesiapanUjiCobaProdukSti` VARCHAR(191) NOT NULL,
    `kesiapanUjiCobaProdukSti_AlasanTidakBerminat` VARCHAR(191) NOT NULL,
    `komitmenAwal` VARCHAR(191) NOT NULL,
    `dokumentasi_Photo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SurveyProspekPetani_uuid_key`(`uuid`),
    UNIQUE INDEX `SurveyProspekPetani_surveyId_key`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SurveyPelangganSti` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `surveyId` BIGINT NOT NULL,
    `produkStiYangDigunakan_Nama` VARCHAR(191) NOT NULL,
    `produkStiYangDigunakan_Batch` VARCHAR(191) NOT NULL,
    `produkStiYangDigunakan_TanggalApplikasi` DATETIME(3) NOT NULL,
    `produkStiYangDigunakan_DosisCaraPakai` VARCHAR(191) NOT NULL,
    `perkembanganTanaman_Pertumbuhan` INTEGER NOT NULL,
    `perkembanganTanaman_HijauDaun` INTEGER NOT NULL,
    `perkembanganTanaman_Akar` INTEGER NOT NULL,
    `perkembanganTanaman_BungaPolongBuah` INTEGER NOT NULL,
    `kondisiCuaca` VARCHAR(191) NOT NULL,
    `kondisiCuaca_Catatan` VARCHAR(191) NOT NULL,
    `masalahYangMuncul_Jenis` VARCHAR(191) NOT NULL,
    `masalahYangMuncul_LuasTerdampak` DECIMAL(65, 30) NOT NULL,
    `masalahYangMuncul_Keparahan` INTEGER NOT NULL,
    `masalahYangMuncul_Photo` VARCHAR(191) NOT NULL,
    `tindakanKorektif_Apa` VARCHAR(191) NOT NULL,
    `tindakanKorektif_Kapan` DATETIME(3) NOT NULL,
    `tindakanKorektif_HasilAwal` INTEGER NOT NULL,
    `butuhPendampingan` BOOLEAN NOT NULL,
    `butuhPendampingan_Jadwal` DATETIME(3) NOT NULL,
    `butuhPendampingan_Lokasi` VARCHAR(191) NOT NULL,
    `butuhPendampingan_Tujuan` VARCHAR(191) NOT NULL,
    `perkiraanHasil` DECIMAL(65, 30) NOT NULL,
    `rencanaPanen` DATETIME(3) NOT NULL,
    `kepuasanTerhadapProdukLayanan_Nilai` INTEGER NOT NULL,
    `kepuasanTerhadapProdukLayanan_Alasan` VARCHAR(191) NOT NULL,
    `minatIkutLanjutProgramReward` BOOLEAN NOT NULL,
    `memberGetMember` BOOLEAN NOT NULL,
    `memberGetMember_Referal` VARCHAR(191) NOT NULL,
    `nextStep_TindakLanjut` VARCHAR(191) NOT NULL,
    `nextStep_WaktuFollowup` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SurveyPelangganSti_uuid_key`(`uuid`),
    UNIQUE INDEX `SurveyPelangganSti_surveyId_key`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SurveyTokoPengecer` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `surveyId` BIGINT NOT NULL,
    `profil_NamaToko` VARCHAR(191) NOT NULL,
    `profil_Alamat` VARCHAR(191) NOT NULL,
    `profil_KanalPenjualan` VARCHAR(191) NOT NULL,
    `profil_VolumePenjualanBulanan` VARCHAR(191) NOT NULL,
    `profil_MerekYangDijual` VARCHAR(191) NOT NULL,
    `kebutuhanKetertarikan_ProdukSti` VARCHAR(191) NOT NULL,
    `kebutuhanKetertarikan_Margin` VARCHAR(191) NOT NULL,
    `kebutuhanKetertarikan_SyaratPembayaran` VARCHAR(191) NOT NULL,
    `kebutuhanKetertarikan_DukunganPromosi` VARCHAR(191) NOT NULL,
    `kesediaanProgram_DisplayMateri` VARCHAR(191) NOT NULL,
    `kesediaanProgram_StokAwal` VARCHAR(191) NOT NULL,
    `kesediaanProgram_DemoPlot` VARCHAR(191) NOT NULL,
    `kesediaanProgram_ProgramPoin` VARCHAR(191) NOT NULL,
    `rencanaKerjasama_POAwal` BOOLEAN NOT NULL,
    `rencanaKerjasama_POAwal_Estimasi` VARCHAR(191) NOT NULL,
    `rencanaKerjasama_JadwalPelatihan` DATETIME(3) NOT NULL,
    `rencanaKerjasama_TargetTigaBulan` VARCHAR(191) NOT NULL,
    `memberGetMember_Nama` VARCHAR(191) NOT NULL,
    `memberGetMember_Kontak` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SurveyTokoPengecer_uuid_key`(`uuid`),
    UNIQUE INDEX `SurveyTokoPengecer_surveyId_key`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SurveyMitraPengepul` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `surveyId` BIGINT NOT NULL,
    `profil_NamaUsaha` VARCHAR(191) NOT NULL,
    `profil_KomoditasUtama` VARCHAR(191) NOT NULL,
    `profil_WilayahJangkauan` VARCHAR(191) NOT NULL,
    `profil_Musiman` BOOLEAN NOT NULL,
    `kebutuhan_KonsistensiPasokan` VARCHAR(191) NOT NULL,
    `kebutuhan_Kualitas` VARCHAR(191) NOT NULL,
    `kebutuhan_DukunganBudidaya` VARCHAR(191) NOT NULL,
    `modelKerjasama_SkemaKemitraan` VARCHAR(191) NOT NULL,
    `modelKerjasama_KeterlibatanProgram` VARCHAR(191) NOT NULL,
    `modelKerjasama_DukunganLogistikEdukasi` VARCHAR(191) NOT NULL,
    `potensiIntegrasiDataPanen` BOOLEAN NOT NULL,
    `komitmenAwal_PertemuanSelanjutnya` DATETIME(3) NOT NULL,
    `komitmenAwal_DataYangDibutuhkan` VARCHAR(191) NOT NULL,
    `komitmenAwal_PicTeknis` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SurveyMitraPengepul_uuid_key`(`uuid`),
    UNIQUE INDEX `SurveyMitraPengepul_surveyId_key`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SurveyKetuaPoktan` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `surveyId` BIGINT NOT NULL,
    `profil_Nama` VARCHAR(191) NOT NULL,
    `profil_JumlahAnggota` INTEGER NOT NULL,
    `profil_TotalLuasTanam` VARCHAR(191) NOT NULL,
    `profil_KomoditasMayor` VARCHAR(191) NOT NULL,
    `agendaBudidaya_KalenderTanam` DATETIME(3) NOT NULL,
    `agendaBudidaya_TantanganUmum` VARCHAR(191) NOT NULL,
    `agendaBudidaya_KegiatanKelompok` VARCHAR(191) NOT NULL,
    `ketertarikan_SosialisasiProduk` VARCHAR(191) NOT NULL,
    `ketertarikan_DemoPlot` VARCHAR(191) NOT NULL,
    `ketertarikan_ProgramPendampingan` VARCHAR(191) NOT NULL,
    `ketertarikan_SkemaPembelianKolektif` VARCHAR(191) NOT NULL,
    `syaratEkspektasi_TransparansiHarga` VARCHAR(191) NOT NULL,
    `syaratEkspektasi_DukunganTeknis` VARCHAR(191) NOT NULL,
    `syaratEkspektasi_RewardKelompok` VARCHAR(191) NOT NULL,
    `aksiAwal_JadwalSosialisasi` DATETIME(3) NOT NULL,
    `aksiAwal_LahanDemo` VARCHAR(191) NOT NULL,
    `aksiAwal_Anngota` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SurveyKetuaPoktan_uuid_key`(`uuid`),
    UNIQUE INDEX `SurveyKetuaPoktan_surveyId_key`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SurveyPenyelesaianMasalah` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `surveyId` BIGINT NOT NULL,
    `deskripsi_SejakKapan` VARCHAR(191) NOT NULL,
    `deskripsi_TahapanTanaman` VARCHAR(191) NOT NULL,
    `dampak_LuasAreaTerdampak` INTEGER NOT NULL,
    `dampak_EstimasiPotensiPenurunanHasil` VARCHAR(191) NOT NULL,
    `riwayatTindakan_ProdukSolusi` VARCHAR(191) NOT NULL,
    `riwayatTindakan_Dosis` VARCHAR(191) NOT NULL,
    `riwayatTindakan_Tanggal` DATETIME(3) NOT NULL,
    `akarDugaan` VARCHAR(191) NOT NULL,
    `akarDugaan_Lainnya` VARCHAR(191) NOT NULL,
    `kebutuhanDukungan` VARCHAR(191) NOT NULL,
    `rencanaAksiDisepakati_PaketRekomendasi` VARCHAR(191) NOT NULL,
    `rencanaAksiDisepakati_Siapa` VARCHAR(191) NOT NULL,
    `slaPemantauan_Tanggal` DATETIME(3) NOT NULL,
    `slaPemantauan_Jam` TIME NOT NULL,
    `statusTiket` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SurveyPenyelesaianMasalah_uuid_key`(`uuid`),
    UNIQUE INDEX `SurveyPenyelesaianMasalah_surveyId_key`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SurveyStatistikKonteksPertanian` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `surveyId` BIGINT NOT NULL,
    `curahHujan` VARCHAR(191) NOT NULL,
    `kejadianEkstrem` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `harga_TrenHargaPupukBenihPestisida` DOUBLE NOT NULL,
    `harga_HargaJualHasilPanen` DOUBLE NOT NULL,
    `perubahanPraktikBudidaya_VarietasBaru` VARCHAR(191) NOT NULL,
    `perubahanPraktikBudidaya_PerubahanTeknik` VARCHAR(191) NOT NULL,
    `perubahanPraktikBudidaya_PenggunaanMesin` VARCHAR(191) NOT NULL,
    `sumberInformasiPetani_Media` VARCHAR(191) NOT NULL,
    `sumberInformasiPetani_TokohLokal` VARCHAR(191) NOT NULL,
    `sumberInformasiPetani_Penyuluh` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SurveyStatistikKonteksPertanian_uuid_key`(`uuid`),
    UNIQUE INDEX `SurveyStatistikKonteksPertanian_surveyId_key`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SurveyPenutupRingkasan` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `surveyId` BIGINT NOT NULL,
    `ringkasanKebutuhanSolusi` TEXT NOT NULL,
    `komitmenTindakLanjut_Apa` TEXT NOT NULL,
    `komitmenTindakLanjut_OlehSiapa` TEXT NOT NULL,
    `komitmenTindakLanjut_KapanTanggal` DATETIME(3) NOT NULL,
    `komitmenTindakLanjut_KapanJam` TIME NOT NULL,
    `jadwalFollowup_Tanggal` DATETIME(3) NOT NULL,
    `jadwalFollowup_Jam` TIME NOT NULL,
    `jadwalFollowup_Kanal` VARCHAR(191) NOT NULL,
    `dokumentasi` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SurveyPenutupRingkasan_uuid_key`(`uuid`),
    UNIQUE INDEX `SurveyPenutupRingkasan_surveyId_key`(`surveyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SurveyBagianUmum` ADD CONSTRAINT `SurveyBagianUmum_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `Contact`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurveyProspekPetani` ADD CONSTRAINT `SurveyProspekPetani_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `SurveyBagianUmum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurveyPelangganSti` ADD CONSTRAINT `SurveyPelangganSti_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `SurveyBagianUmum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurveyTokoPengecer` ADD CONSTRAINT `SurveyTokoPengecer_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `SurveyBagianUmum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurveyMitraPengepul` ADD CONSTRAINT `SurveyMitraPengepul_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `SurveyBagianUmum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurveyKetuaPoktan` ADD CONSTRAINT `SurveyKetuaPoktan_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `SurveyBagianUmum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurveyPenyelesaianMasalah` ADD CONSTRAINT `SurveyPenyelesaianMasalah_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `SurveyBagianUmum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurveyStatistikKonteksPertanian` ADD CONSTRAINT `SurveyStatistikKonteksPertanian_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `SurveyBagianUmum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurveyPenutupRingkasan` ADD CONSTRAINT `SurveyPenutupRingkasan_surveyId_fkey` FOREIGN KEY (`surveyId`) REFERENCES `SurveyBagianUmum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
