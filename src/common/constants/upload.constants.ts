import { join } from 'path';

export const UPLOAD_PATH = join(__dirname, '../../../uploads');
export const ALLOWED_FILE_TYPES = ['.jpg', '.jpeg', '.png'];
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
