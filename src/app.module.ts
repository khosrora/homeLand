import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './admin/user/user.module';
import { IndexService } from './admin/index/index.service';
import { IndexModule } from './admin/index/index.module';
import { AuthModule } from './api/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, IndexModule, AuthModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, IndexService],
  exports: [AppService]
})
export class AppModule { }
