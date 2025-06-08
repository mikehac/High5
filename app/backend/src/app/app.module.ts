import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExternalapiModule } from '../externalapi/externalapi.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_DB ?? 'mongodb://nas:27017/'),
    ExternalapiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
