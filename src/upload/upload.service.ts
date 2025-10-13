import { BadRequestException, Injectable } from '@nestjs/common';
import { UPLOAD_PATH } from 'src/common/constants/upload.constants';
import * as fs from 'fs';
import { join, relative } from 'path';

@Injectable()
export class UploadService {
  constructor() {
    this.ensureUploadDirectory();
  }

  /**
   * Pastikan direktori upload tersedia.
   * Jika belum ada, otomatis dibuat secara rekursif.
   */
  private ensureUploadDirectory(): void {
    if (!fs.existsSync(UPLOAD_PATH)) {
      fs.mkdirSync(UPLOAD_PATH, { recursive: true });
    }
  }

  /**
   * Menangani upload satu file.
   */
  handleUpload(file: Express.Multer.File,  category: string) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    const categoryPath = join(UPLOAD_PATH, category);
    if (!fs.existsSync(categoryPath)) fs.mkdirSync(categoryPath, { recursive: true });

    const filePath = join(categoryPath, file.filename);
    fs.renameSync(file.path, filePath);
    
    return {
      message: 'File uploaded successfully!',
      filename: file.filename,
      category,
      originalName: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      url: `/uploads/${category}/${file.filename}`,
    };
  }

  /**
   * Menangani upload beberapa file sekaligus.
   */
  handleMultipleUploads(files: Express.Multer.File[], category: string) {
    if (!files || files.length === 0) {
      throw new BadRequestException('No files uploaded');
    }

    return files.map((file) => {
        // Ambil kategori dari path relatif (uploads/<category>/filename
        const relativePath = relative(UPLOAD_PATH, file.destination);
        const category = relativePath.split('\\').join('/');
        return {
            filename: file.filename,
            category,
            originalName: file.originalname,
            mimeType: file.mimetype,
            size: file.size,
             url: `/uploads/${category}/${file.filename}`,
        };
    });
  }

  /**
   * Menghapus file berdasarkan nama file.
   */
  deleteFile(category: string, filename: string) {
        const filePath = join(UPLOAD_PATH, category, filename);

        if (!fs.existsSync(filePath)) {
        throw new BadRequestException('File not found');
        }

        fs.unlinkSync(filePath);

        return { message: `File "${filename}" deleted successfully from "${category}"` };
  }
}
