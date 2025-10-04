import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './users/user.module';
import { ContactModule } from './contact/contact.module';
import { SurveyModule } from './survey/survey.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, ContactModule, SurveyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
