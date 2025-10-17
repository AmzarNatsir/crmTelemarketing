-- AlterTable
ALTER TABLE `surveypelanggansti` MODIFY `butuhPendampingan_Jadwal` DATETIME(3) NULL,
    MODIFY `butuhPendampingan_Lokasi` VARCHAR(191) NULL,
    MODIFY `butuhPendampingan_Tujuan` VARCHAR(191) NULL,
    MODIFY `memberGetMember_Referal` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `surveyprospekpetani` MODIFY `minatProgramPembayaranPerpanen_KisaranHasil` DECIMAL(65, 30) NULL,
    MODIFY `minatProgramPembayaranPerpanen_FrequesiPanen` DECIMAL(65, 30) NULL,
    MODIFY `minatProgramPembayaranPerpanen_BuktiHasil` VARCHAR(191) NULL,
    MODIFY `minatProgramPembayaranPerpanen_PreferensiTenor` VARCHAR(191) NULL,
    MODIFY `minatProgramPembayaranPerpanen_Kesediaan` BOOLEAN NULL,
    MODIFY `minatProgramRewardMemberGetMember_TopikReward` VARCHAR(191) NULL,
    MODIFY `kebutuhanPendampinganAgronomis_Topik` VARCHAR(191) NULL,
    MODIFY `kebutuhanPendampinganAgronomis_WaktuKunjungan` DATETIME(3) NULL;
