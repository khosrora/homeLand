import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './admin/user/user.module';
import { IndexService } from './admin/index/index.service';
import { IndexModule } from './admin/index/index.module';

@Module({
  imports: [UserModule, IndexModule],
  controllers: [AppController],
  providers: [AppService, IndexService],
})
export class AppModule { }
