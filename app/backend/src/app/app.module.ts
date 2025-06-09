import { Module } from '@nestjs/common';
import { ExternalapiModule } from '../externalapi/externalapi.module';
import { MongoModule } from '../mongo/mongo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ExternalapiModule, MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
