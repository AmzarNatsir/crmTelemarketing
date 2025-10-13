import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './users/user.module';
import { ContactModule } from './contact/contact.module';
import { SurveyModule } from './survey/survey.module';
import { UploadService } from './upload/upload.service';
import { UploadController } from './upload/upload.controller';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, ContactModule, SurveyModule, UploadModule],
  controllers: [AppController, UploadController],
  providers: [AppService, UploadService],
})
export class AppModule {}
