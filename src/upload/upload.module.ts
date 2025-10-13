import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

@Module({
    controllers: [UploadController],
    providers: [UploadService],
    exports: [UploadService], // supaya bisa dipakai modul lain
})
export class UploadModule {}
