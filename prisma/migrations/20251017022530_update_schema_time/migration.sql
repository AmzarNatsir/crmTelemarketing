-- AlterTable
ALTER TABLE `surveypenutupringkasan` MODIFY `komitmenTindakLanjut_KapanJam` VARCHAR(191) NULL,
    MODIFY `jadwalFollowup_Jam` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `surveypenyelesaianmasalah` MODIFY `slaPemantauan_Jam` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `surveytokopengecer` MODIFY `rencanaKerjasama_POAwal_Estimasi` VARCHAR(191) NULL,
    MODIFY `rencanaKerjasama_JadwalPelatihan` DATETIME(3) NULL,
    MODIFY `rencanaKerjasama_TargetTigaBulan` VARCHAR(191) NULL;
