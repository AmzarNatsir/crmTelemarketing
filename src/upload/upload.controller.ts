import { Body, Param, Controller, Delete, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from './upload.config';

@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) {}

    // ✅ Upload single file
    @Post(':category/single')
    @UseInterceptors(FileInterceptor('file', multerOptions))
    uploadSingle(
        @Param('category') category: string,
        @UploadedFile() file: Express.Multer.File,
    ) {
        return this.uploadService.handleUpload(file, category);
    }


    // ✅ Upload multiple files
    @Post(':category/multiple')
    @UseInterceptors(FilesInterceptor('files', 10, multerOptions))
    uploadMultiple(
        @Param('category') category: string,
        @UploadedFiles() files: Express.Multer.File[],
    ) {
        return this.uploadService.handleMultipleUploads(files, category);
    }
    // ✅ Delete uploaded file
    @Delete(':category/:filename')
    deleteFile(
        @Param('category') category: string,
        @Param('filename') filename: string,
    ) {
        return this.uploadService.deleteFile(category, filename);
    }

}
