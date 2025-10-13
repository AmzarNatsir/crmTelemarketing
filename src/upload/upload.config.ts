import { BadRequestException } from '@nestjs/common';
import { diskStorage, Options } from 'multer';
import { extname, join } from 'path';
import * as fs from 'fs';
import { UPLOAD_PATH, ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from 'src/common/constants/upload.constants';

export const multerOptions: Options = {
  storage: diskStorage({
    destination: (req, file, cb) => {
        const category = (req.params.category || 'others').toLowerCase();
        const uploadDir = join(UPLOAD_PATH, category);

        // Pastikan folder kategori dibuat otomatis
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = extname(file.originalname).toLowerCase();
      const baseName = file.originalname
        .replace(/\s+/g, '_')
        .replace(ext, '')
        .replace(/[^a-zA-Z0-9_-]/g, '');

      cb(null, `${baseName}-${uniqueSuffix}${ext}`);
    },
  }),

  fileFilter: (req, file, cb) => {
    const ext = extname(file.originalname).toLowerCase();

    // ✅ gunakan type-safe callback
    const safeCb = cb as unknown as (error: Error | null, acceptFile: boolean) => void;

    // ✅ validasi tipe file
    if (!ALLOWED_FILE_TYPES.includes(ext)) {
      return safeCb(new BadRequestException(`File type ${ext} is not allowed!`), false);
    }

    safeCb(null, true);
  },

  limits: {
    fileSize: MAX_FILE_SIZE,
  },
};
